function contarCedulas(valor){

    let notas1 = 0;
    let notas5 = 0;
    let notas10 = 0;
    let notas50 = 0;
    let notas100 = 0;

    while (valor > 0){
        if (valor >= 100){
            notas100++;
            valor -= 100;
        } else if (valor >= 50){
            notas50++;
            valor -= 50;
        } else if (valor >= 10){
            notas10++;
            valor -= 10;
        } else if (valor >= 5){
            notas5++;
            valor -= 5;
        } else if (valor >= 1){
            notas1++;
            valor -= 1;
        }
    }

    return elaborarResultado(notas100, notas50, notas10, notas5, notas1);

}

function elaborarResultado(notas100, notas50, notas10, notas5, notas1) {
    let resultado = '';

    if (notas100 > 0) {
        resultado += `${notas100} nota(s) de R$ 100. `;
    }

    if (notas50 > 0) {
        resultado += `${notas50} nota(s) de R$ 50. `;
    }

    if (notas10 > 0) {
        resultado += `${notas10} nota(s) de R$ 10. `;
    }

    if (notas5 > 0) {
        resultado += `${notas5} nota(s) de R$ 5. `;
    }

    if (notas1 > 0) {
        resultado += `${notas1} nota(s) de R$ 1. `;
    }

    return resultado;
}