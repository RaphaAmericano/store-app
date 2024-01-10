"use client"
import useProductStore from "@/app/_store/ProductsStore";
import ProductCard from "./ProductCard";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import AlertBar from "@/components/AlertBar";
import { FaRegSadTear } from "react-icons/fa";
const Products = () => {
    const { state: { products }} = useProductStore()
    const searchParams = useSearchParams()
    const searchQuery = searchParams.get("q")

    const filteredProducts = searchQuery !== null ? 
        products.filter((product) => {
            const stringToTest = product.name.toLowerCase();
            return stringToTest.includes(searchQuery.toLowerCase())
        }) : products

    return <div className="grid grid-cols-3 gap-1">
        <Suspense fallback={<Loader text="Buscando produtos"/>}>
            { filteredProducts.length > 0 ? filteredProducts.map((product) => <ProductCard key={product.id} {...product} /> ) : <AlertBar className="col-span-full" title={"Nenhum Produto encontrado"} icon={<FaRegSadTear />}>Sua busca não retornou nenhum produto. Tente novamente com outro termo.</AlertBar>}
        </Suspense>
    </div>
}
export default Products;