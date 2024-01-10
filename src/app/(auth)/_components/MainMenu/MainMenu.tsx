import { Root } from "@radix-ui/react-menubar"
import BarMenu from "@/components/BarMenu"
import { Menubar } from "@/components/ui/menubar"
import Drawer from "@/components/Drawer"
import CartDrawer from "../CartDrawer"
import Profile from "../Profile"
import SignOutButton from "./SignOutButton"
import { BarMenuItemProps } from "@/components/BarMenu/BarMenuItem/BarMenuItem.props"
import BarMenuItem from "@/components/BarMenu/BarMenuItem"
import MainMenuWrapper from "./MainMenuWrapper"

const MainMenu = () => {

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

    return  <MainMenuWrapper >
                <BarMenu menuTitle="Menu">
                    {items}
                    <SignOutButton />
                </BarMenu>
                <Drawer openSide="left" text="Carrinho">      
                    <CartDrawer />
                </Drawer>
                <Profile  />
            </MainMenuWrapper>
}

export default MainMenu