import { create } from "zustand";

interface ActionsProps {
    addProduct: (id: string) => void;
    removeProduct: (id: string) => void,
    clearCart: () => void
}

interface StoreProps {
    state: {
        cart:string[]
    },
    actions: ActionsProps
}

const useCartStore = create<StoreProps>((set) => ({
    state:{
        cart:[]
    },
    actions: {
        addProduct: (id:string) => set((state) => ({ 
            state: { cart: [...state.state.cart, id]}
        })),
        removeProduct: (id:string) => set((state) => ({ 
            state: { 
                cart: state.state.cart.filter((product) => product !== id)
            }
        })),
        clearCart: () => set((state) => ({
            state: { 
                cart: []
            }
        }))
    }
}))

export default useCartStore;
