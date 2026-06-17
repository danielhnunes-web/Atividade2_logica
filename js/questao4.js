let area = document.getElementById("pessoas");

for(let i = 1; i <= 20; i++){

    area.innerHTML += `

    <h4>Pessoa ${i}</h4>

    Nome:
    <input type="text" id="nome${i}">

    Idade:
    <input type="number" id="idade${i}">

    Sexo:
    <select id="sexo${i}">
        <option value="F">Feminino</option>
        <option value="M">Masculino</option>
    </select>

    <br><br>

    `;

}

function calcular(){

    let menores = 0;
    let idosos = 0;
    let entre18e65 = 0;

    let feminino = 0;
    let masculino = 0;

    for(let i = 1; i <= 20; i++){

        let idade = Number(document.getElementById("idade"+i).value);

        let sexo = document.getElementById("sexo"+i).value;

        if(idade < 18){

            menores++;

        }else if(idade > 65){

            idosos++;

        }else{

            entre18e65++;

        }

        if(sexo == "F"){

            feminino++;

        }else{

            masculino++;

        }

    }

    document.getElementById("resultado").innerHTML =

    "Pessoas com menos de 18 anos: " + menores + "<br>" +

    "Pessoas acima de 65 anos: " + idosos + "<br>" +

    "Pessoas entre 18 e menor que 65 anos: " + entre18e65 + "<br>" +

    "Quantidade de mulheres: " + feminino + "<br>" +

    "Quantidade de homens: " + masculino;

}