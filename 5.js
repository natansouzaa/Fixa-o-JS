function repair(valorDecimal){

    return `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
    
}
