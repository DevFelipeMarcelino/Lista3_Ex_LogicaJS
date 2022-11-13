// 10) Em uma eleição sindical concorreram ao cargo de presidente três candidatos (A, B e C). Durante a apuração dos votos foram computados votos nulos e votos em branco, além dos votos válidos para cada candidato. Deve ser criado um programa de computador que efetue a leitura da quantidade de votos válidos para cada candidato, além de efetuar também a leitura da quantidade de votos nulos e votos em branco. Ao final o programa deve apresentar o número total de eleitores, considerando votos válidos, nulos e em branco; o percentual correspondente de votos válidos em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato A em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato B em relação à quantidade de eleitores; o percentual correspondente de votos válidos do candidato C em relação à quantidade de eleitores; o percentual correspondente de votos nulos em relação à quantidade de eleitores; e por último o percentual correspondente de votos em branco em relação à quantidade de eleitores. 

function clicar() {
    var VotosValidosA= document.querySelector(".VotosValidosA").value;
    var VotosValidosB= document.querySelector(".VotosValidosB").value;
    var VotosValidosC= document.querySelector(".VotosValidosC").value;

    var TotalVotosBrancos= document.querySelector(".TotalVotosBrancos").value;
    var TotalVotosNulos= document.querySelector(".TotalVotosNulos").value;

    var TotalVotos= parseInt(VotosValidosA) + parseInt(VotosValidosB) + parseInt(VotosValidosC) + parseInt(TotalVotosBrancos) + parseInt(TotalVotosNulos);
    var TotalVotosValidos = parseInt(VotosValidosA) + parseInt(VotosValidosB) + parseInt(VotosValidosC);

    var PercentualVotosValidos = (parseFloat(TotalVotosValidos)/parseFloat(TotalVotos)) * parseFloat(100);

    var PercentualCandidatoA = (parseFloat(VotosValidosA)/parseFloat(TotalVotos)) * parseFloat(100);
    var PercentualCandidatoB = (parseFloat(VotosValidosB)/parseFloat(TotalVotos)) * parseFloat(100);
    var PercentualCandidatoC = (parseFloat(VotosValidosC)/parseFloat(TotalVotos)) * parseFloat(100);

    var PercentualVotosBrancos = (parseFloat(TotalVotosBrancos)/parseFloat(TotalVotos)) * parseFloat(100);
    var PercentualVotosNulos = (parseFloat(TotalVotosNulos)/parseFloat(TotalVotos)) * parseFloat(100);

    document.querySelector(".TotalVotos").innerHTML = TotalVotos;
    document.querySelector(".PercentualVotosValidos").innerHTML = PercentualVotosValidos+"%";

    document.querySelector(".PercentualCandidatoA").innerHTML = PercentualCandidatoA+"%";
    document.querySelector(".PercentualCandidatoB").innerHTML = PercentualCandidatoB+"%";
    document.querySelector(".PercentualCandidatoC").innerHTML = PercentualCandidatoC+"%";

    document.querySelector(".PercentualVotosBrancos").innerHTML = PercentualVotosBrancos+"%";
    document.querySelector(".PercentualVotosNulos").innerHTML = PercentualVotosNulos+"%";
}