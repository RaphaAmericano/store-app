"use client"
import { Button } from "@/components/ui/button"
import { signOut } from "next-auth/react"
import { useRouter } from "next/navigation"
const SignOutButton = () => {
    const { replace } = useRouter()
     function signout(){
         signOut()   
    }
    return <Button variant="ghost" onClick={signout}>Sign Out</Button>
}
export default SignOutButton