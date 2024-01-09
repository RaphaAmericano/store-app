"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { getInputValidationCSS } from "@/utils/form.utils";
import Loader from "@/components/Loader";

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
    const router = useRouter()

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
        console.error(error)
    }

    const emailClassName = isDirty ? getInputValidationCSS("email", errors) : "" ;
    const passwordClassName = isDirty ? getInputValidationCSS("password", errors) : "" ;
    
    return <form  onSubmit={handleSubmit(submit, error)} >
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email"
                    className={emailClassName} 
                    disabled={loading}
                    {...register('email', { required: true})} 
                    placeholder="Digite aqui o seu email" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" 
                    disabled={loading}
                    className={passwordClassName}
                    {...register('password', { required: true })} 
                    type="password" 
                    placeholder="Digite aqui a sua senha" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Button disabled={loading} type="submit">Login</Button>
            </div>
        </div>
    </form>
}

export default Form