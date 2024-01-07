import { ProductProps } from "@/types/Product.props";
import { create } from "zustand";

interface ActionsProps {
    addProduct: (product: ProductProps) => void;
    getProduct: (id:string) => ProductProps | undefined,
    removeProduct: (id: string) => void
}

interface StoreProps {
    state: {
        products:ProductProps[]
    },
    actions: ActionsProps
}

const useProductStore = create<StoreProps>((set, get) => ({
    state:{
        products:[]
    },
    actions: {
        addProduct: (product:ProductProps) => set((state) => ({ 
            state: { products: [...state.state.products, product]}
        })),
        getProduct: (id:string) => get().state.products.find((product) => product.id === id),
        removeProduct: (id:string) => set((state) => ({state: {
            products: state.state.products.filter((product) => product.id !== id)
        }}))
    }
}))

export default useProductStore;
