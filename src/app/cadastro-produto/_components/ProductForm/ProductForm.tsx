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
import useProductStore from "@/app/_store/ProductsProvider";
import { ProductProps } from "@/types/Product.props";
import { useToast } from "@/components/ui/use-toast";


const ProductForm = () => {
    const { toast } = useToast()
    const { state, actions } = useProductStore()
    const { products } = state;
    console.log(products)
    const { addProduct } = actions;
    function saveProduct(product:ProductProps){
        addProduct(product);
        toast({
            title: `Novo produto ${product.name} salvo com sucess`,
            description: `Nome: ${product.name}\nPreço:${product.price}\nDescrição:${product.description}`
        })
    }

    return <Card className="w-[350px]">
    <CardHeader>
        <CardDescription>Preencha o formulário para cadastrar um novo produto.</CardDescription>
    </CardHeader>
    <CardContent>
        <Form successCallback={saveProduct} failCallback={() => console.log(0)}/>
    </CardContent>
</Card>
}

export default ProductForm;