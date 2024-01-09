"use client"
import Heading from "@/components/Heading";
import ProductForm from "./_components/ProductForm";
import Loader from "@/components/Loader";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function CadastroProduto(){
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
    redirect("/")
  }

  if(status === "authenticated"){
    return ( 
        <div className="h-screen flex flex-col items-center justify-evenly">
            <Heading tag="h2">Cadastro Produto</Heading>
            <ProductForm />
        </div>
)
  }
    
}