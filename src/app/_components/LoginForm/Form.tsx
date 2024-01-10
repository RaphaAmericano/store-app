"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { getInputValidationCSS } from "@/utils/form.utils";
import FormMessage from "@/components/FormMessage";
import { KeyboardEvent } from "react";


const validationSchema = z.object({
    email: z.string().min(1, { message: "Tamanho mínimo é 1"}).email({   message: "Deve ser um email válido" }),
    password: z.string().min(6, { message: "Tamanho mínimo é 6" })
})

type ValidationSchema = z.infer<typeof validationSchema>;
type ValidationSchemaKeys = keyof ValidationSchema; 
const defaultValues:ValidationSchema = {
    email: "",
    password: ""
}

interface LoginFormProps {
    loading:boolean;
    setLoading:(state:boolean) => void
}

const Form = ({ loading, setLoading }: LoginFormProps ) => {

    async function singInApi(data:any){
        setLoading(true)
        const result = await signIn("credentials", {
            ...data,
            redirect: false
        })
        setLoading(false)
        if(result?.error){
            console.error("signin API error:",result?.error)
            return
        }
    }

    const { register, handleSubmit, reset, formState: { errors, isDirty } } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
        defaultValues
    });

    function submit(data:ValidationSchema){
        singInApi(data)
        reset(defaultValues)
    }

    function error(error: any){
        console.error(error)
    }

    function keyEnter(event:KeyboardEvent<HTMLInputElement> ){
        const { key } = event;
        if(key === "Enter"){
            handleSubmit(submit, error)
        }
    }

    const emailClassName = (errors.email && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("email", errors) : "" ;
    const passwordClassName = (errors.password && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("password", errors) : "" ;
    
    return <form  onSubmit={handleSubmit(submit, error)} >
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email"
                    className={emailClassName} 
                    disabled={loading}
                    {...register('email', { required: true})} 
                    placeholder="Digite aqui o seu email" />
                    {(errors.email && errors.email.message && isDirty) && <FormMessage text={errors.email.message} type="danger"/>}
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" 
                    onKeyDown={keyEnter}
                    autoComplete="current-password"
                    disabled={loading}
                    className={passwordClassName}
                    {...register('password', { required: true })} 
                    type="password" 
                    placeholder="Digite aqui a sua senha" />
                    {(errors.password && errors.password.message && isDirty) && <FormMessage text={errors.password.message} type="danger"/>}
            </div>
            <div className="flex flex-col space-y-1.5">
                <Button disabled={loading} type="submit">Login</Button>
            </div>
        </div>
    </form>
}

export default Form