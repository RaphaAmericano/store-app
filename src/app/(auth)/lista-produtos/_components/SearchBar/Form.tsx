"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { getInputValidationCSS } from "@/utils/form.utils";
import FormMessage from "@/components/FormMessage"
import { KeyboardEvent, KeyboardEventHandler, ReactEventHandler } from "react"

const validationSchema = z.object({
    searchQuery: z.string()
})

type ValidationSchema = z.infer<typeof validationSchema>;
type ValidationSchemaKeys = keyof ValidationSchema;
const defaultValues:ValidationSchema = {
    searchQuery: ""
}

interface SearchFormProps {
    callback:(value:string) => void
}


const Form = ({ callback }: SearchFormProps) => {

    const { register, handleSubmit, formState: { errors, isDirty }} = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
        defaultValues
    });

    function submit(data:ValidationSchema){
        callback(data.searchQuery)
    }

    function error(error:any){
        console.error(error)
    }

    function keyEnter(event:KeyboardEvent<HTMLInputElement> ){
        const { key } = event;
        if(key === "Enter"){
            handleSubmit(submit, error)
        }
    }

    const searchQueryClassName = (errors.searchQuery && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("searchQuery", errors) : "" ;

    return <form onSubmit={handleSubmit(submit, error)}>
        <div className="flex w-full items-center gap-2">
        
            <div className="flex flex-col space-y-1.5">
                <Input
                    onKeyDown={keyEnter}
                    className={searchQueryClassName} 
                    {...register('searchQuery', { required: true})} 
                    placeholder="Busque seu produto" />
            </div>
            
            <div className="flex flex-col space-y-1.5">
                <Button type="submit">Buscar</Button>
            </div>
        </div>
    </form>
}
export default Form