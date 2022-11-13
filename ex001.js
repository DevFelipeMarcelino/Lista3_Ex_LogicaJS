// 1) Ler quatro números inteiros e apresentar o resultado da adição e multiplicação, baseando-se na utilização do conceito da propriedade distributiva. Ou seja, se forem lidas as variáveis A, B, C, e D, devem ser somadas e multiplicadas A com B, A com C e A com D. Depois B com C, B com D e por fim C com D. Perceba que será necessário efetuar seis operações de adição e seis operações de multiplicação e apresentar doze resultados de saída. 

function clicar() {
    var A= document.querySelector(".A").value;
    var B= document.querySelector(".B").value;
    var C= document.querySelector(".C").value;
    var D= document.querySelector(".D").value;

    var SomaAcomB= parseInt(A) + parseInt(B);
    var SomaAcomC= parseInt(A) + parseInt(C);
    var SomaAcomD= parseInt(A) + parseInt(D);

    var MultiplicacaoAcomB= parseInt(A) * parseInt(B);
    var MultiplicacaoAcomC= parseInt(A) * parseInt(C);
    var MultiplicacaoAcomD= parseInt(A) * parseInt(D);

    document.querySelector(".MultiplicacaoAcomB").innerHTML = MultiplicacaoAcomB;
    document.querySelector(".MultiplicacaoAcomC").innerHTML = MultiplicacaoAcomC;
    document.querySelector(".MultiplicacaoAcomD").innerHTML = MultiplicacaoAcomD;

    document.querySelector(".SomaAcomB").innerHTML = SomaAcomB;
    document.querySelector(".SomaAcomC").innerHTML = SomaAcomC;
    document.querySelector(".SomaAcomD").innerHTML = SomaAcomD;

    var SomaBcomC= parseInt(C) + parseInt(B);
    var SomaBcomD= parseInt(B) + parseInt(D);

    document.querySelector(".SomaBcomC").innerHTML = SomaBcomC;
    document.querySelector(".SomaBcomD").innerHTML = SomaBcomD;

    var MultiplicacaoBcomC= parseInt(B) * parseInt(C);
    var MultiplicacaoBcomD= parseInt(B) * parseInt(D);

    document.querySelector(".MultiplicacaoBcomC").innerHTML = MultiplicacaoBcomC;
    document.querySelector(".MultiplicacaoBcomD").innerHTML = MultiplicacaoBcomD;

    var SomaCcomD= parseInt(C) + parseInt(D);
    document.querySelector(".SomaCcomD").innerHTML = SomaCcomD;

    var MultiplicacaoCcomD= parseInt(C) * parseInt(D);
    document.querySelector(".MultiplicacaoCcomD").innerHTML = MultiplicacaoCcomD;
    }