import useCartStore from "@/app/_store/CartStore"
import useProductStore from "@/app/_store/ProductsStore";
import { getFormatedPrice } from "@/utils/generic.utils";

const CartResume = () => {
    const { state: { cart } } = useCartStore();
    const { state: { products }} = useProductStore();

    const total = cart.reduce((acc, { productId, quantity }) => {
        const product = products.find((product) => product.id === productId)
        const value = product?.price ? product.price * quantity : 0;
        acc += value
        return acc
    }, 0)

    const quantity = cart.reduce((acc, { quantity } ) => {
        acc += quantity
        return acc;
    }, 0 )

    return <div className="grid grid-cols-2 gap-4 py-4">
        <span>
            Items: {quantity}
        </span>
        <span>
            Total: {getFormatedPrice(total)}
        </span>
    </div>
}

export default CartResume