"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader
} from "@/components/ui/card"
import Form from "./Form";
import useProductStore from "@/app/_store/ProductsStore";
import { ProductProps } from "@/types/Product.props";
import { useToast } from "@/components/ui/use-toast";
import { getFormatedPrice } from "@/utils/generic.utils";


const ProductForm = () => {
    const { toast } = useToast()
    const { actions: { addProduct } } = useProductStore()

    function saveProduct(product:ProductProps){
        addProduct(product);
        toast({
            title: `Novo produto ${product.name} salvo com sucess`,
            description: `Nome: ${product.name}\nPreço:${getFormatedPrice(product.price)}\nDescrição:${product.description}`
        })
    }

    return  <Card className="w-[350px]">
                <CardHeader>
                    <CardDescription>Preencha o formulário para cadastrar um novo produto.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form successCallback={saveProduct} failCallback={() => console.log(0)}/>
                </CardContent>
            </Card>
}

export default ProductForm;