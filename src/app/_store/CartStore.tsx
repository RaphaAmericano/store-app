import { CartProps } from "@/types/Cart.props";
import { create } from "zustand";

interface ActionsProps {
    addProduct: (id: string) => void;
    removeProduct: (id: string) => void,
    setProductQuantity: (productId:string, quantity:number) => void,
    clearCart: () => void
}

interface StoreProps {
    state: {
        cart:CartProps[]
    },
    actions: ActionsProps
}

const useCartStore = create<StoreProps>((set, get) => ({
    state:{
        cart:[]
    },
    actions: {
        addProduct: (productId:string) => set((state) => {
            const product = state.state.cart.find((product) => product.productId === productId);
            if(product === undefined){
                return ({ 
                    state: { cart: [...state.state.cart, {productId, quantity: 1}]}
                })
            }
            return state
        }),
        removeProduct: (productId:string) => set((state) => ({ 
            state: { 
                cart: state.state.cart.filter((product) => product.productId !== productId)
            }
        })),
        setProductQuantity:(productId:string, quantity:number) => set((state) => {
            const newState = get().state.cart.map((product) => {
                if(product.productId === productId) {
                    return {  ...product, quantity }
                }
                return product;
            } );

            return ({
                state:{
                    cart: newState
                }
            })
        }),
        clearCart: () => set(() => ({
            state: { 
                cart: []
            }
        })),
    }
}))

export default useCartStore;
