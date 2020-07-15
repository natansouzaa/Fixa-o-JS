function bhaskara(a, b, c){

    let delta = (b**2) - (4*a*c);

    if (delta < 0){
        return "Delta é negativo"
    }else{
        let valor1 = (-b - Math.sqrt(delta)) / (2 * a)
        let valor2 = (-b + Math.sqrt(delta)) / (2 * a)

        return "Valores: " + valor1 + " / " + valor2;
    }
    
}
