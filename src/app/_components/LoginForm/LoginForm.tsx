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

const LoginForm = () => {
    
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Preencha seus dados para entrar</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form successCallback={() => console.log(100)} failCallback={() => console.log(0)}/>
                </CardContent>
                <CardFooter>
                    <button onClick={() => signIn()}>Logar com Google</button>
                </CardFooter>
            </Card>
}

export default LoginForm