"use client"
import useProductStore from "@/app/_store/ProductsStore";
import ProductCard from "./ProductCard";

const Products = () => {
    const { state: { products }} = useProductStore()
    
    return <div className="grid grid-cols-3 gap-1">
        {products && products.map((product) => <ProductCard key={product.id} {...product} /> )}
    </div>
}
export default Products;