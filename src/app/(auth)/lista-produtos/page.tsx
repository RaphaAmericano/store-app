import Heading from "@/components/Heading";
import Products from "./_components/Products";

export default function ListaProdutos(){
    return (
        <div className="h-screen flex flex-col items-center justify-evenly">
            <Heading tag="h2">Lista Produtos</Heading>
            <Products />
        </div>

    )
}