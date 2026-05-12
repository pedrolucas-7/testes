let numeroSecreto = Math.floor(Math.random() * 100);

let tentativas = 0;

function verificar(){

    let numeroJogador =
    document.getElementById("numero").value;

    tentativas++;

    document.getElementById("tentativas").innerHTML =
    "Tentativas: " + tentativas;

    if(numeroJogador == numeroSecreto){

        document.getElementById("mensagem").innerHTML =
        "Você acertou!";

        document.body.style.backgroundColor =
        "lightgreen";

    }
    else if(numeroJogador > numeroSecreto){

        document.getElementById("mensagem").innerHTML =
        "Você errou! O número é menor.";

        document.body.style.backgroundColor =
        "#ff7b7b";

    }
    else{

        document.getElementById("mensagem").innerHTML =
        "Você errou! O número é maior.";

        document.body.style.backgroundColor =
        "#ff7b7b";

    }
    document.getElementById("numero").value = "";

     document.getElementById("numero").focus();

}
document.getElementById("numero").addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        verificar();

    }

});