// 4) Elaborar um programa que efetue a apresentação do valor da conversão em real de um valor lido em dólar. O programa deve solicitar o valor da cotação do dólar e também a quantidade de dólares disponível com o usuário, para que seja apresentado o valor em moeda brasileira. 

function clicar() {
    var dolares= document.querySelector(".dolares").value;
    var cotacao= document.querySelector(".cotacao").value;

    var reais= parseInt(dolares) * parseInt(cotacao);
    var resultado = reais.toFixed(2)

    document.querySelector(".resultado").innerHTML = "você terá então R$ "+resultado;
}