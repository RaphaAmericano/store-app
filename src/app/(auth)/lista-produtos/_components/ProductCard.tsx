"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ProductProps } from "@/types/Product.props";
import useCartStore from "@/app/_store/CartStore";
import { getFormatedPrice } from "@/utils/generic.utils";

const ProductCard = (props:ProductProps) => {
    const { actions: { addProduct } } = useCartStore()
    const { id, description, name, price } = props;
  // className="w-[350px]"
    return (
        <Card>
          <CardHeader>
            <CardTitle>{name}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0" >
                <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                    {getFormatedPrice(price)}
                    </p>
                </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button onClick={() => addProduct(id)}>Adicionar ao carrinho</Button>
          </CardFooter>
        </Card>
    )
}
export default ProductCard