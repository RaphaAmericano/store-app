"use client"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
const SignOutButton = () => {
    const { replace } = useRouter()
     async function signout(){
        await signOut({ redirect:false })   
        replace("/")

    }
    return <Button variant="ghost" onClick={signout}>Sign Out</Button>
}
export default SignOutButton