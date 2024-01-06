"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { FormProps } from "./Form.props"

const Form = (props: FormProps) => {
    const { successCallback, failCallback } = props;
    function handleSubmit(){
        successCallback()
    }

    function handlerError(){
        failCallback()
    }
    return <form  onSubmit={handleSubmit} onError={handlerError}>
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Digite aqui o seu email" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" placeholder="Digite aqui a sua senha" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Button type="submit">Login</Button>
            </div>
        </div>
    </form>
}

export default Form