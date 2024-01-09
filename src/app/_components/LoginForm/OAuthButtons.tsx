"use client"
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react"
const OAuthButtons = () => {
    return <div className="flex mx-auto w-full">
        <Button variant="outline" className="grow" onClick={() => signIn("google")}><FaGoogle /></Button>
        <Button variant="outline" className="grow" onClick={() => signIn("github")}><FaGithub /></Button>
    </div>
}

export default OAuthButtons