"use client"

import { useSession } from "next-auth/react";
import LoginForm from "./_components/LoginForm";
import { redirect } from "next/navigation";
import Loader from "@/components/Loader";

export default function Home() {
  const session = useSession()
  const { status } = session;

  if(status === "loading") {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <Loader text="Carregando" />
      </div>
    )
  }
  
  if(status === "unauthenticated"){
    return (
        <div className="h-screen flex flex-col items-center justify-center">
          <LoginForm />
        </div>
    );
  }

  if(status === "authenticated"){
    redirect("/cadastro-produto")
  }

}
