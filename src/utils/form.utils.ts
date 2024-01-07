import { FieldErrors } from "react-hook-form"

export function getInputValidationCSS<T extends keyof any, K extends object >(field:T, errors: FieldErrors<K>){
    console.log(errors)
    if(errors[field]?.type === "required" ){
        return "border-yellow-500"
    }
    return "border-red-500"
}