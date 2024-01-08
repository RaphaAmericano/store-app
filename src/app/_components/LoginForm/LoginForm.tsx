"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Form from "./Form"
import { signIn } from "next-auth/react"
import { postSignin } from "@/services/auth.service"
import { useRouter } from "next/navigation"

const LoginForm = () => {

    const router = useRouter()

    async function singInApi(data:any){
        console.log(data);
        const result = await signIn("credentials", {
            ...data,
            redirect: false
        })

        if(result?.error){
            console.log(result?.error)
            return
        }

        router.replace("/cadastro-produto")
    }
    
    
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Preencha seus dados para entrar</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form successCallback={singInApi} failCallback={() => console.log(0)}/>
                </CardContent>
                <CardFooter>
                    <button onClick={() => signIn()}>Logar com Google</button>
                </CardFooter>
            </Card>
}

export default LoginForm