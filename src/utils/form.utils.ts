import { FieldErrors } from "react-hook-form"

export function getInputValidationCSS<T extends keyof any, K extends object >(field:T, errors: FieldErrors<K>){
    if(errors[field]?.type === "required" ){
        return "border-yellow-500"
    }
    return "border-red-500 outline-red-500"
}

export function getNumericValueOfStringPrice(value:string){
    return parseFloat(value.replace(/[^0-9,-]/g, '').replace(',', '.'));
}