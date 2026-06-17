let pessoas = document.getElementById("pessoas");

for (let i = 1; i <= 12; i++) {

    pessoas.innerHTML += `
        <p>
            Pessoa ${i}<br>

            Idade:
            <input type="number" id="idade${i}">

            Peso:
            <input type="number" id="peso${i}">
        </p>
    `;

}


function verificarDoadores() {

    let podeDoar = 0;
    let naoPodeDoar = 0;

    for (let i = 1; i <= 12; i++) {

        let idade = Number(document.getElementById("idade" + i).value);
        let peso = Number(document.getElementById("peso" + i).value);

        if (idade >= 18 && idade <= 60 && peso > 50) {

            podeDoar++;

        } else {

            naoPodeDoar++;

        }

    }

    document.getElementById("resultado").innerHTML =
        "Podem doar: " + podeDoar + "<br>" +
        "Não podem doar: " + naoPodeDoar;

}