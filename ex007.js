// 7) Elaborar um programa que efetue a leitura de três valores (A, B e C) e apresente como resultado final o quadrado da soma dos três valores lidos.

function clicar() {
    var a= document.querySelector(".a").value;
    var b= document.querySelector(".b").value;
    var c= document.querySelector(".c").value;

    var QuadradoSoma3= (parseInt(a) + parseInt(b) + parseInt(c)) * (parseInt(a) + parseInt(b) + parseInt(c));
    var resultado = QuadradoSoma3

    document.querySelector(".resultado").innerHTML = resultado;
}