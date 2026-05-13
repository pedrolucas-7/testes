let canvas = document.getElementById("tela1");
let ctx = canvas.getContext("2d");


function desenhar_quadrado(x, y, largura, altura, cor){

    ctx.fillStyle = cor;

    ctx.fillRect(x, y, largura, altura);
}


function desenhar_linha(x1, y1, x2, y2, cor){

    ctx.beginPath();

    ctx.strokeStyle = cor;

    ctx.moveTo(x1, y1);

    ctx.lineTo(x2, y2);

    ctx.stroke();
}


function desenhar_arco(x, y, raio, inicio, fim, corLinha, corDentro){

    ctx.beginPath();

    ctx.arc(x, y, raio, inicio, fim);

    ctx.strokeStyle = corLinha;



    //chat me explicou:
    //“Se corDentro for diferente de vazio (""); Ou seja:  se existir uma cor → pinta o interior ;;;;;; se estiver vazio → não pinta
    if(corDentro != ""){
        ctx.fillStyle = corDentro;
        ctx.fill();
    }

    ctx.stroke();
}


function escrever(texto, x, y, tamanho, cor){

    ctx.font = tamanho + "px Arial";

    ctx.fillStyle = cor;

    ctx.fillText(texto, x, y);
}


desenhar_quadrado(0, 0, 300, 300, "#eeeeeeff");


desenhar_quadrado(0, 0, 50, 50, "blue");

desenhar_quadrado(250, 0, 50, 50, "red");


escrever("Canvas", 110, 35, 20, "black");


desenhar_linha(50, 50, 150, 150, "blue");

desenhar_linha(250, 50, 150, 150, "red");




desenhar_arco(150, 150, 80, Math.PI, -3/4*Math.PI, "green", "");

desenhar_arco(150, 150, 80, -1/4*Math.PI, 0, "green", "");

desenhar_arco(150, 150, 60, Math.PI, 0, "green", "");


desenhar_arco(150, 115, 15, 0, Math.PI * 2, "blue", "#55ddee");


desenhar_linha(150, 150, 150, 260, "gray");


desenhar_quadrado(110, 150, 40, 40, "red");


desenhar_quadrado(0, 120, 30, 30, "#55dddd");

desenhar_quadrado(0, 150, 30, 30, "#55dddd");

desenhar_quadrado(270, 133, 30, 30, "#55dddd");

desenhar_quadrado(270, 150, 30, 17, "#55dddd");

desenhar_linha(0, 150, 300, 150, "green");


desenhar_arco(70, 220, 15, 0, Math.PI * 2, "green", "yellow");

desenhar_arco(220, 220, 15, 0, Math.PI * 2, "green", "yellow");


desenhar_arco(150, 300, 80, Math.PI, -1/2*Math.PI, "green", "");

desenhar_arco(150, 300, 60, -1/2*Math.PI, 0, "green", "");

desenhar_arco(150, 300, 40, Math.PI, 0, "green", "#55dddd");


desenhar_quadrado(0, 240, 30, 30, "yellow");

desenhar_quadrado(0, 270, 30, 30, "yellow");

desenhar_quadrado(30, 270, 30, 30, "yellow");


desenhar_quadrado(270, 240, 30, 30, "black");

desenhar_quadrado(270, 270, 30, 30, "black");

desenhar_quadrado(240, 270, 30, 30, "black");



//////////////////////////////////////////////////


let canvas2 = document.getElementById("tela2");

ctx = canvas2.getContext("2d");



// CÉU
desenhar_quadrado(0, 0, 400, 400, "#98e6c3");


// SOL
desenhar_arco(320, 80, 50, 0, Math.PI * 2, "yellow", "yellow");


// CHÃO
desenhar_quadrado(0, 260, 400, 140, "#8e8e8e");


// RIO
desenhar_arco(0, 260, 60, Math.PI * 1/2, Math.PI * 2, "#5b84e6", "#5b84e6");

desenhar_quadrado(0, 260, 60, 140, "#5b84e6");

desenhar_arco(150, 400, 57, -1/2*Math.PI, Math.PI * 2 , "#5b84e6", "#5b84e6");

desenhar_quadrado(0, 342, 150, 70, "#5b84e6");


// CASA
desenhar_quadrado(145, 170, 110, 90, "#8b4a18");


// PORTA
desenhar_quadrado(190, 220, 22, 40, "#6b4a1f");


// JANELAS
desenhar_quadrado(155, 185, 30, 30, "#7ec8ff");

desenhar_quadrado(245, 185, -30, 30, "#7ec8ff");


// TELHADO
ctx.beginPath();

ctx.moveTo(145, 170);

ctx.lineTo(200, 120);

ctx.lineTo(255, 170);

ctx.fillStyle = "#e76f51";

ctx.fill();


// ÁRVORE ESQUERDA
desenhar_quadrado(61, 200, 20, 60, "#8b4a18");

desenhar_arco(71, 180, 35, 0, Math.PI * 2, "green", "green");


// ÁRVORE DIREITA
desenhar_quadrado(330, 220, 20, 70, "#8b4a18");

desenhar_arco(340, 200, 35, 0, Math.PI * 2, "green", "green");