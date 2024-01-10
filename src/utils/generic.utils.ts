import { KeyboardEvent } from "react";

export function getFormatedPrice(price:number): string {
    const formattedValue = price.toFixed(2)
    const [reais, centavos] = formattedValue.split('.');
    const formattedReais = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return `R$ ${formattedReais},${centavos}`
}

export function customKeyPressEvent<E>(event:KeyboardEvent<E>, keyName:string, callback:() => void ){
    const { key } = event;
    if(key === keyName){
        callback()
    }
}