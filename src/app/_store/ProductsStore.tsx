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

const defaultValues:ProductProps[] = [
    {
        id: "d83545cd-a2b0-4966-b229-285ed0ffe92f",
        name:"Goiaba",
        description:"Uma fruta muito boa",
        price: 0.5
    },
    {
        id: "1dbaa0ce-300f-434d-9235-02244db071b6",
        name:"Manga",
        description:"Uma fruta muito boa",
        price: 10
    },
    {
        id: "7ee7bcfd-89a6-43ca-a946-a0bbb2129b13",
        name:"Melão",
        description:"Uma fruta muito boa",
        price: 5.55
    },
    {
        id: "3c9be1f8-6f30-4408-b91a-26569f75316d",
        name:"Melância",
        description:"Uma fruta muito boa",
        price: 8.75
    }
]

const useProductStore = create<StoreProps>((set, get) => ({
    state:{
        products:defaultValues
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
