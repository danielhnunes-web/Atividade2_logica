function mostrarDivisores(){

    let numero = Number(document.getElementById("numero").value);
    let divisores = [];

    for (let i = 1; i <= numero; i++){

        if (numero % i === 0){
            divisores.push(i);
        }
    }

    document.getElementById("resultado").innerHTML = "Divisores: " + divisores.join(", ");
}