let pessoas = [];

function adicionarPessoa(){

    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let renda = Number(document.getElementById("renda").value);

    pessoas.push({
        idade: idade,
        sexo: sexo,
        renda: renda
    });

    alert("Pessoa adicionada");

}

function calcular(){

    let total = pessoas.length;

    let somaSalarioMasculino = 0;
    let qtdMasculino = 0;

    let mulheresRenda = 0;

    let homens2000 = 0;
    let mulheres2000 = 0;

    for(let pessoa of pessoas){

        if(pessoa.sexo == "M"){
            somaSalarioMasculino += pessoa.renda;

            qtdMasculino++;

        }

        if(pessoa.sexo == "F" && pessoa.renda >= 1000 && pessoa.renda <= 3000){

            mulheresRenda++;

        }

        if(pessoa.renda >= 2000){
            if(pessoa.sexo == "M"){

                homens2000++;

            }else{
                mulheres2000++;
            }
        }
    }

    let mediaMasculino = 0;

    if(qtdMasculino > 0){

        mediaMasculino = somaSalarioMasculino / qtdMasculino;

    }

    let percentualHomens = 0;
    let percentualMulheres = 0;

    if(total > 0){

        percentualHomens = (homens2000 / total) * 100;
        percentualMulheres = (mulheres2000 / total) * 100;

    }

    document.getElementById("resultado").innerHTML =

    "Quantidade de pessoas digitadas: " + total + "<br><br>" +
    "Média de salário masculino: R$ " + mediaMasculino.toFixed(2) + "<br><br>" +
    "Mulheres com renda entre R$1000 e R$3000: " + mulheresRenda + "<br><br>" +
    "Percentual de homens com salário >= R$2000: " + percentualHomens.toFixed(2) + "%<br>" +
    "Percentual de mulheres com salário >= R$2000: " + percentualMulheres.toFixed(2) + "%";
}