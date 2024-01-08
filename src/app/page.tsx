import { getServerSession } from 'next-auth'
import LoginForm from './_components/LoginForm'
import { options } from './api/auth/[...nextauth]/options'
import { useRouter } from 'next/navigation'

export default async function Home() {
  // const router = useRouter()
  const session = await getServerSession(options)
  console.log(session)
  // if(!session){
  //   router.replace("/cadastro-produto")
  // }
  return (
    <main >
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </main>
  )
}
