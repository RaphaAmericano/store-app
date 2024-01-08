import useCartStore from "@/app/_store/CartStore"
import useProductStore from "@/app/_store/ProductsStore";
import { getFormatedPrice } from "@/utils/generic.utils";

const CartResume = () => {
    const { state: { cart } } = useCartStore();
    const { state: { products }} = useProductStore();

    const total = cart.map(({ productId, quantity }) => {
        const product = products.find((product) => product.id === productId)
        if(product?.price){
            return product?.price * quantity
        }
        return 0
    }).reduce((acc, value) => {
        acc += value
        return acc
    }, 0);

    const quantity = cart.reduce((acc, { quantity} ) => {
        acc += quantity
        return acc;
    }, 0  )

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