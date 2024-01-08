"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import useProductStore from "@/app/_store/ProductsStore"

interface ProductInputProps {
    id: string
}

const ProductInput = ({ id }:ProductInputProps ) => {
    const { actions:{ getProduct} } = useProductStore();
    const product = getProduct(id)
    if(product === undefined){
        // TODO: Criar o compoennt de alert para erros
        return <div>Erro ao carregar o produto</div>
    }
    const { name, price } = product; 
    console.log(product)
    return      <div className="flex w-full max-w-sm items-center space-x-2">
                    <Label htmlFor="name" className="text-right">{name}</Label>
                    <Input min={0} type="number" placeholder="quantidade" />
                    <Button>Remover</Button>
                </div>
            
}

export default ProductInput;