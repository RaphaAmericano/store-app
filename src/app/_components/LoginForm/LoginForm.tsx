"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Form from "./Form"

const LoginForm = () => {
    
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Preencha seus dados para entrar</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form successCallback={() => console.log(100)} failCallback={() => console.log(0)}/>
                </CardContent>
            </Card>
}

export default LoginForm