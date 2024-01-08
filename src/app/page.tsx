import { getServerSession } from "next-auth/next";
import LoginForm from "./_components/LoginForm";
import { options } from "./api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(options);
  if (session) {
    redirect("/cadastro-produto");
  }
  return (
    <main>
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </main>
  );
}
