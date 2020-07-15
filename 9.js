function classifica(nota){
    let notaArredonda = arredondaNota(nota);

    if (notaArredonda < 40){
        return "Reprovado(a), nota: " + notaArredonda;
    } else {
        return "Aprovado(a), nota: " + notaArredonda;
    }

}

function arredondaNota(nota) {
    if (nota % 5 > 2) {
        return nota + (5 - (nota % 5))
    } else {
        return nota
    }
}