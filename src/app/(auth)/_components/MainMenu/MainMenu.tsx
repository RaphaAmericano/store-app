"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import BarMenu from "@/components/BarMenu"
import { formatMenuItem } from "@/components/BarMenu/BarMenu.utils"
import { Menubar } from "@/components/ui/menubar"
import Drawer from "@/components/Drawer"

import { BarMenuItemProps } from "@/components/BarMenu/BarMenu.props"
import CartDrawer from "../CartDrawer"

const MainMenu = () => {
    
    const { data, status } = useSession();
    const { replace } = useRouter();
    if(status === "unauthenticated"){
        replace("/")
    }

    const menuItems:BarMenuItemProps[] = [
        {
            text: "Lista de produtos",
            separatorAfter: false,
            isAnchor: true,
            href:"/lista-produtos"
        },
        {
            text: "Cadastro de produtos",
            separatorAfter: true,
            isAnchor: true,
            href:"/cadastro-produto"
        },
        {
            text: "Sign Out",
            separatorAfter: false,
            onClickFn: async () => {
                await signOut({
                    redirect: false
                })
                replace("/")
            }
        },
    ]
    const items = menuItems.map(formatMenuItem);

    return  <Menubar >
                <BarMenu menuTitle="Menu">{items}</BarMenu>
                <Drawer openSide="left" text="Carrinho">      
                    { (status === "authenticated") ? <CartDrawer /> : <div>Carregando...</div>}
                </Drawer>
            </Menubar>
}

export default MainMenu