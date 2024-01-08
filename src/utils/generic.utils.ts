export function getFormatedPrice(price:number): string {
    const formattedValue = price.toFixed(2)
    const [reais, centavos] = formattedValue.split('.');
    const formattedReais = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return `R$ ${formattedReais},${centavos}`
}