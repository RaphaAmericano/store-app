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
import useProductStore from "@/app/store/ProductsProvider";
import { ProductProps } from "@/types/Product.props";


const ProductForm = () => {
    
    const { state, actions } = useProductStore()
    const { products } = state;
    console.log(products)
    const { addProduct } = actions;
    function saveProduct(product:ProductProps){
        addProduct(product)
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