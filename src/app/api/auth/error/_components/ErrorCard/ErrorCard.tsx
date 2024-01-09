import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ErrorCard = () => {
    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Erro!</CardTitle>
                    <CardDescription>Ocorreu um erro ao tentar logar. Retorne e tente novamente.</CardDescription>
                </CardHeader>
                <CardContent>
                        
                </CardContent>
                <CardFooter>
                    <Button asChild>
                        <Link href="/">Voltar ao Signin</Link>
                    </Button>
                </CardFooter>
            </Card>
}

export default ErrorCard