"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FieldErrors, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { getInputValidationCSS } from "@/utils/form.utils";

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

const Form = () => {
    const router = useRouter()
    const session = useSession()

    async function singInApi(data:any){
        const result = await signIn("credentials", {
            ...data,
            redirect: false
        })

        if(result?.error){
            console.error("signin API error:",result?.error)
            return
        }

        router.replace("/cadastro-produto")
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
        console.log(error)
    }

    const emailClassName = isDirty ? getInputValidationCSS("email", errors) : "" ;
    const passwordClassName = isDirty ? getInputValidationCSS("password", errors) : "" ;
    
    return <form  onSubmit={handleSubmit(submit, error)} >
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email"
                    className={emailClassName} 
                    {...register('email', { required: true})} 
                    placeholder="Digite aqui o seu email" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" 
                className={passwordClassName}
                    {...register('password', { required: true })} 
                    type="password" 
                    placeholder="Digite aqui a sua senha" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Button type="submit">Login</Button>
            </div>
        </div>
    </form>
}

export default Form