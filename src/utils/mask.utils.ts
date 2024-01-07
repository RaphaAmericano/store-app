export function priceMask(price:string){
    const cleanedPrice = price.replace(/\D/g, '');
    const formattedPrice = `R$ ${cleanedPrice}`;
    if (cleanedPrice.length === 0) {
        return 'R$ ';
    }
    
    if (cleanedPrice.length <= 2) {
        return formattedPrice;
    }

    const reais = cleanedPrice.slice(0, -2); 
    const centavos = cleanedPrice.slice(-2); 
    const formattedReais = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `R$ ${formattedReais},${centavos}`;
}