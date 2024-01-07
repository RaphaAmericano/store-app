"use client"
import { signOut, useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import BarMenu from "@/components/BarMenu"
import { formatMenuItem } from "@/components/BarMenu/BarMenu.utils"
import { Menubar } from "@/components/ui/menubar"

const MainMenu = () => {
    const { status } = useSession()
    const router = useRouter();
    const menuItems = [
        {
            text: "Lista de produtos",
            separatorAfter: false,
            onClickFn: () => router.push("/lista-produtos")
        },
        {
            text: "Cadastro de produtos",
            separatorAfter: true,
            onClickFn: () => router.push("/cadastro-produto")
        },
        {
            text: "Sign Out",
            separatorAfter: false,
            onClickFn: () => signOut()
        },
    ]

    const items = menuItems.map(formatMenuItem);
    return <Menubar >
        <BarMenu menuTitle="Menu">{items}</BarMenu>
    </Menubar>
}

export default MainMenu