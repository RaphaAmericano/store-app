"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Form from "./Form"
import { useSession, signIn } from "next-auth/react"

const LoginForm = () => {
    const { data:session } = useSession()
    // if(session && session.user ){
    //     return <div>Usuario logado</div>
    // }
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Preencha seus dados para entrar</CardDescription>
                </CardHeader>
                <CardContent>
                    <button onClick={() => signIn()}>Entrar</button>
                    {/* <Form successCallback={() => console.log(100)} failCallback={() => console.log(0)}/> */}
                </CardContent>
            </Card>
}

export default LoginForm