"use client"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { getInputValidationCSS, getNumericValueOfStringPrice } from "@/utils/form.utils";
import { FormProps } from "@/types/Form.props";
import { ChangeEvent, KeyboardEvent } from "react"
import * as masks from "@/utils/mask.utils"
import FormMessage from "@/components/FormMessage"
import { v4 } from "uuid"


const validationSchema = z.object({
    name: z.string().min(2, { message: "Tamanho mínimo são 2 caractéres"}),
    price: z.string().refine(value => {
        const numericValue = getNumericValueOfStringPrice(value)
        return numericValue > 0
    },  { message: "Valor não pode ser menor que R$0,01"} ),
    description: z.string().min(10, { message:"Descrição deve possuir no mínimo 10 caractéres"})
})

const formatSchema = z.object({
    id: z.string().optional().transform((val) => v4()),
    price: z.string().transform((val) => getNumericValueOfStringPrice(val)),
})

const formatDataValidationSchema = validationSchema.merge(formatSchema);


type ValidationSchema = z.infer<typeof validationSchema>
type ValidationSchemaKeys = keyof ValidationSchema;
const defaultValues: ValidationSchema = {
    name: "",
    price: "0",
    description: ""
}

const Form = (props: FormProps<any, any>) => {
    const { successCallback, failCallback } = props;
    const { register, handleSubmit, reset, setValue,  formState: { errors, isDirty } } = useForm<ValidationSchema>({
        resolver: zodResolver(validationSchema),
        defaultValues
    });

    function priceMask(event: ChangeEvent<HTMLInputElement>){
        const { value } = event.target;
        setValue('price', masks.priceMask(value))
    }

    function submit (data:ValidationSchema){
        const format = formatDataValidationSchema.safeParse(data) 
        if(format.success === true ){
            successCallback(format.data)
            reset(defaultValues)
        }
    }

    function error(){
        failCallback()
    }

    function keyEnter(event:KeyboardEvent<HTMLInputElement> ){
        const { key } = event;
        if(key === "Enter"){
            handleSubmit(submit, error)
        }
    }

    const nameClassName = (errors.name && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("name", errors) : "" ;
    const priceClassName = (errors.price && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("price", errors) : "" ;
    const descriptionClassName = (errors.description && isDirty) ? getInputValidationCSS<ValidationSchemaKeys, ValidationSchema>("description", errors) : "" ;

    return <form onSubmit={handleSubmit(submit, error)}>
        <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input id="name"
                    className={nameClassName} 
                    {...register('name', { required: true})} 
                    placeholder="Digite aqui o nome do produto" />
                    {(errors.name && errors.name.message && isDirty) && <FormMessage text={errors.name.message} type="danger"/>}
            </div>
            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="price">Preço</Label>
                <Input id="price" 
                    className={priceClassName}
                    {...register('price', { required: true, onChange: priceMask } )} 
                    placeholder="Digite aqui o preço do produto" />
                    {(errors.price && errors.price.message && isDirty) && <FormMessage text={errors.price.message} type="danger"/>}
            </div>

            <div className="flex flex-col space-y-1.5">
                <Label htmlFor="description">Descrição</Label>
                <Textarea id="description" 
                    className={descriptionClassName}
                    {...register('description', { required: true })} 
                    placeholder="Digite aqui a descrição do produto" />
                    {(errors.description && errors.description.message && isDirty) && <FormMessage text={errors.description.message} type="danger"/>}
            </div>

            <div className="flex flex-col space-y-1.5">
                <Button type="submit">Cadastrar</Button>
            </div>
        </div>
    </form>
}

export default Form;