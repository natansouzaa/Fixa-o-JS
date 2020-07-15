function repair(valorDecimal){
    return `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}`
}

console.log(repair(0.1 + 0.2));