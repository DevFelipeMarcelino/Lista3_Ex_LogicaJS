// 3) Ler dois inteiros (variáveis A e B) e imprimir o resultado do quadrado da diferença do primeiro valor pelo segundo. 

function clicar() {
    var a= document.querySelector(".a").value;
    var b= document.querySelector(".b").value;

    var QuadradoDiferenca= (parseInt(a) - parseInt(b)) * (parseInt(a) - parseInt(b));

    document.querySelector(".QuadradoDiferenca").innerHTML = QuadradoDiferenca;
}