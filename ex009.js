// 9) Ler o valor correspondente ao salário mensal (variável SM) de um trabalhador e também o valor do percentual de reajuste (variável PR) a ser atribuído. Apresentar o valor do novo salário (variável NS).

function clicar() {
    var SalarioAtual= document.querySelector(".SalarioAtual").value;
    var ValorAumento= document.querySelector(".ValorAumento").value;

    var percentualDoReajuste= (parseInt(ValorAumento) / parseInt(SalarioAtual)) * parseInt(100);
    var SalarioNovo = parseInt(ValorAumento) + parseInt(SalarioAtual);
    var resultado = SalarioNovo.toFixed(2);

    document.querySelector(".percentualDoReajuste").innerHTML = percentualDoReajuste+"%";
    document.querySelector(".resultado").innerHTML = "R$ "+resultado;
}