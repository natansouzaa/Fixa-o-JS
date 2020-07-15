let fatorial = function(numero){
    if(numero == 0){
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

/* Método sem recursão
 *
let fatorial = function(numero){
    let resultado = 1;

    for (let i = numero; i > 0; i--){
        resultado *= i;
    }

    return resultado;
}
*
*/