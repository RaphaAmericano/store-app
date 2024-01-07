import { ProductProps } from "@/types/Product.props";
import { create } from "zustand";

interface ActionsProps {
    addProduct: (product: ProductProps) => void;
    removeProduct: (id: number) => void
}

interface StoreProps {
    state: {
        products:ProductProps[]
    },
    actions: ActionsProps
}

const useProductStore = create<StoreProps>((set) => ({
    state:{
        products:[]
    },
    actions: {
        addProduct: (product:ProductProps) => set((state) => ({ 
            state: { products: [...state.state.products, product]}
        })),
        removeProduct: (id:number) => set((state) => ({state: {
            products: state.state.products.filter((product) => product.id !== id)
        }}))
    }
}))

export default useProductStore;
