import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import Image from 'next/image'


export default function Home() {
  return (
    <main >
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        
          <Card className="w-[350px]">
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>Preencha seus dados para entrar</CardDescription>
              </CardHeader>
            <CardContent>
              <form>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" placeholder="Digite aqui o seu email" />
                  </div>
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" placeholder="Digite aqui a sua senha" />
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button>Login</Button>
            </CardFooter>
          </Card>
         
      </div>
    </main>
  )
}
