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

const LoginForm = () => {
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Login</CardTitle>
                    <CardDescription>Preencha seus dados para entrar</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form />
                </CardContent>
                <CardFooter>
                    <OAuthButtons />
                </CardFooter>
            </Card>
}

export default LoginForm