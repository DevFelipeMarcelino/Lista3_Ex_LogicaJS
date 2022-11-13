// 2) Elaborar um programa que calcule e apresente o volume de uma caixa retangular, por meio da fórmula VOLUME=COMPRIMENTO * LARGURA * ALTURA.

function clicar() {
    var largura= document.querySelector(".largura").value;
    var altura= document.querySelector(".altura").value;
    var comprimento= document.querySelector(".comprimento").value;

    var volume= parseInt(largura) * parseInt(altura) * parseInt(comprimento);

    document.querySelector(".volume").innerHTML = volume;
}