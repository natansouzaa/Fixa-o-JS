function frutasDisponiveis(fruta){

    switch(fruta) {
        case "maçã":
            return "Não vendemos esta fruta aqui"
        case "kiwi":
            return "Estamos com escassez de kiwis"
        case "melancia":
            return "Aqui está, são 3 reais"
    
        default:
            return "Erro frutifero";
    }

}