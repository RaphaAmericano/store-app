"use client"
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react"
const OAuthButtons = () => {
    return <div className="flex mx-auto w-full">
        <Button variant="outline" className="grow" onClick={() => signIn("google")}><FaGoogle className="mr-1" />Google</Button>
        <Button variant="outline" className="grow" onClick={() => signIn("github")}><FaGithub className="mr-1" />Github</Button>
    </div>
}

export default OAuthButtons