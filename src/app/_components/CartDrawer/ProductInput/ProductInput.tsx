"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import useProductStore from "@/app/_store/ProductsStore"
import { CartProps } from "@/types/Cart.props"
import { getFormatedPrice } from "@/utils/generic.utils"
import useCartStore from "@/app/_store/CartStore"
import { ChangeEvent } from "react"

const ProductInput = ({ productId, quantity }:CartProps ) => {
    const { actions:{ getProduct } } = useProductStore();
    const { actions: { setProductQuantity, removeProduct } } = useCartStore()
    const product = getProduct(productId)
    if(product === undefined){
        // TODO: Criar o compoennt de alert para erros
        return <div>Erro ao carregar o produto</div>
    }
    const { name, price } = product; 
    
    function updateQuantity(event: ChangeEvent<HTMLInputElement>){
        const { value:quantity } = event.target;
        setProductQuantity(productId, parseInt(quantity))
    }

    function removeCartProduct(){
        removeProduct(productId)
    }

    return  <div className="flex w-full max-w-sm items-center justify-between space-x-2">
                <Label htmlFor="name" className="text-right">{name}</Label>
                <Input onChange={updateQuantity} className={"w-1/4"} min={0} type="number" placeholder="quantidade" value={quantity} />
                <small>{getFormatedPrice(quantity * price)}</small>
                <Button onClick={removeCartProduct}>Remover</Button>
            </div>
            
}

export default ProductInput;