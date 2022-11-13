// 8) Elaborar um programa de computador que efetue a leitura de quatro valores inteiros (variáveis A, B, C e D). Ao final o programa deve apresentar o resultado do produto (variável P) do primeiro com o terceiro valor, e o resultado da soma (variável S) do segundo com o quarto valor.

function clicar() {
    var a= document.querySelector(".a").value;
    var b= document.querySelector(".b").value;
    var c= document.querySelector(".c").value;
    var d= document.querySelector(".d").value;

    var produto= parseInt(a) * parseInt(c);
    var soma = parseInt(b) + parseInt(d);

    document.querySelector(".produto").innerHTML = produto;
    document.querySelector(".soma").innerHTML = soma;
}