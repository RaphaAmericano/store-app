"use client"
import BarMenu from "@/components/BarMenu"

import { Menubar } from "@/components/ui/menubar"
import Drawer from "@/components/Drawer"

import CartDrawer from "../CartDrawer"
import Profile from "../Profile"
import SignOutButton from "./SignOutButton"
import { BarMenuItemProps } from "@/components/BarMenu/BarMenuItem/BarMenuItem.props"
import BarMenuItem from "@/components/BarMenu/BarMenuItem"
import { useSession } from "next-auth/react"

const MainMenu = (props: any) => {
    
    const session = useSession()
    // console.log(session.avatar)
    // console.log(session)
    // const session = props;
    // console.log("main menu session", session)
    // if(session === null ){
    //     return 
    // }

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
    ]
    const items = menuItems.map((item) => <BarMenuItem key={item.text.toLowerCase().split(" ").join("")} {...item}/>);

    return  <Menubar >
                <BarMenu menuTitle="Menu">
                    {items}
                    <SignOutButton />
                </BarMenu>
                <Drawer openSide="left" text="Carrinho">      
                    {/* <CartDrawer /> */}
                </Drawer>
                <Profile  />
            </Menubar>
}

export default MainMenu