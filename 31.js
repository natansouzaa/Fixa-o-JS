function qtdNegativos(vetor){

    let negativos = 0;

    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] < 0){
            negativos++;
        }
    }

    return negativos;

}