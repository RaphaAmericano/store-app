"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Form from "./Form";

const ProductForm = () => {
    return <Card className="w-[350px]">
    <CardHeader>
        <CardDescription>Preencha o formulário para cadastrar um novo produto.</CardDescription>
    </CardHeader>
    <CardContent>
        <Form successCallback={() => console.log(100)} failCallback={() => console.log(0)}/>
    </CardContent>
</Card>
}

export default ProductForm;