import Heading from "@/components/Heading";
import ProductForm from "./_components/ProductForm";

export default function CadastroProduto(){
    return ( 
            <div className="h-screen flex flex-col items-center justify-evenly">
                <Heading tag="h2">Cadastro Produto</Heading>
                <ProductForm />
            </div>
    )
}