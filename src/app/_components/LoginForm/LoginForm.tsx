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
import OAuthButtons from "./OAuthButtons"
import { useState } from "react"
import Loader from "@/components/Loader"

const LoginForm = () => {
    const [loading, setLoading] = useState<boolean>(false)
    
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Preencha seus dados para entrar</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form loading={loading} setLoading={setLoading} />
                </CardContent>
                <CardContent>
                    
                    <OAuthButtons />
                </CardContent>
                <CardFooter>
                    {loading && <Loader />}
                </CardFooter>
            </Card>
}

export default LoginForm