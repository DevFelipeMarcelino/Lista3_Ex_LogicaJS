// 5) Elaborar um programa que efetue a apresentação do valor da conversão em dólar de um valor lido em real. O programa deve solicitar o valor da cotação do dólar e também a quantidade de reais disponível com o usuário, para que seja apresentado o valor em moeda americana.

function clicar() {
    var reais= document.querySelector(".reais").value;
    var cotacao= document.querySelector(".cotacao").value;

    var dolares= parseInt(reais) / parseInt(cotacao);
    var resultado = dolares.toFixed(2)

    document.querySelector(".resultado").innerHTML = "você terá então US$ "+resultado;
}