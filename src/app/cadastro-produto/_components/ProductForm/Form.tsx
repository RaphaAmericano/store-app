"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { FieldErrors, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { getInputValidationCSS } from "@/utils/form.utils";
import { FormProps } from "@/types/Form.props";
import { ChangeEvent } from "react"
import * as masks from "@/utils/mask.utils"

const validationSchema = z.object({
    name: z.string().min(2, { message: "Tamanho mínimo são 2 caractéres"}),
    price: z.string().refine(value => {
        const numericValue = parseFloat(value.replace(/[^0-9,-]/g, '').replace(',', '.'));
        return numericValue > 0
    },  { message: "Valor não pode ser menor que R$0,01"} ),
    description: z.string().min(10, { message:"Descrição deve possuir no mínimo 10 caractéres"})
})

type ValidationSchema = z.infer<typeof validationSchema>
type ValidationSchemaKeys = keyof ValidationSchema;
const defaultValues: ValidationSchema = {
    name: "",
    price: "0",
    description: ""
}



const Form = (props: FormProps) => {
    const { successCallback, failCallback } = props;
    const { register, handleSubmit, watch, setValue,  formState: { errors, isDirty, touchedFields } } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
        defaultValues
    });
    // console.log(touchedFields)

    function priceMask(event: ChangeEvent<HTMLInputElement>){
        const { value } = event.target;
        setValue('price', masks.priceMask(value))
    }

    function submit (data:ValidationSchema){
        console.log(data)
        successCallback()
    }

    function error(){
        failCallback()
    }

    const nameClassName = (errors.name && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("name", errors) : "" ;
    const priceClassName = (errors.price && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("price", errors) : "" ;
    const descriptionClassName = (errors.description && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("description", errors) : "" ;

    const nameErrorText = (errors.name && isDirty) ? ` ${errors.name.message}` : ""
    const priceErrorText = (errors.price && isDirty) ? ` ${errors.price.message}` : ""
    const descriptionErrorText = (errors.description && isDirty) ? ` ${errors.description.message}` : ""

    return <form onSubmit={handleSubmit(submit, error)}>
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome{nameErrorText}</Label>
                <Input id="name"
                    className={nameClassName} 
                    {...register('name', { required: true})} 
                    placeholder="Digite aqui o nome do produto" />
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="price">Preço{priceErrorText}</Label>
                <Input id="price" 
                    className={priceClassName}
                    {...register('price', { required: true, onChange: priceMask } )} 
                    placeholder="Digite aqui o preço do produto" />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Descrição{descriptionErrorText}</Label>
                <Textarea id="description" 
                    className={descriptionClassName}
                    {...register('description', { required: true })} 
                    placeholder="Digite aqui a descrição do produto" />
            </div>

            <div className="flex flex-col space-y-1.5">
                <Button type="submit">Cadastrar</Button>
            </div>
        </div>
    </form>
}

export default Form;