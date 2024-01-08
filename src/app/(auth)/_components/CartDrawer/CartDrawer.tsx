"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  SheetClose,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import useCartStore from "@/app/_store/CartStore"
import ProductInput from "./ProductInput"
import CartResume from "./CartResume"

const CartDrawer = () => {
    const { state:{ cart }, actions:{ clearCart } } = useCartStore()
    return <>
    <SheetHeader>
      <SheetTitle>Seus produtos</SheetTitle>
      <SheetDescription>
        Adicione ou retire items do seu carrinho
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      {cart && cart.map((product) => <ProductInput key={product.productId} {...product} />)}
    </div>
    <CartResume />
    <SheetFooter>
      <Button onClick={clearCart}>Esvaziar carrinho</Button>
      <SheetClose asChild>
        <Button>Salvar alterações</Button>
      </SheetClose>
    </SheetFooter>
    </>
}
export default CartDrawer