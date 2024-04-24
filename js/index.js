function calcularXp(){
    const nome = document.getElementById("fnome").value;
    const exp = document.getElementById("fexp").value;
    



    document.getElementById("resultado").innerHTML = Calculo(nome,exp);
}


function Calculo(nome,exp){
    var elo = ""
    if (exp < 1000){
        elo = "Ferro"
    }
    if (exp > 1000){
        elo = "Bronze"
    }
    if (exp > 2000){
        elo = "Prata"
    }
    if (exp > 5000){
        elo = "Ouro"
    }
    if (exp > 7000){
        elo = "Platina"
    }
    if (exp > 8000){
        elo = "Ascendente"
    }
    if (exp > 9000){
        elo = "Imortal"
    }
    if (exp > 10001){
        elo = "Radiante"
    }

    return nome + " está no nível " + elo;
}


function AlterarImg(){
    const imgsrc = document.getElementsByClassName("img").src;

}

function mudarImage(){
    const classe = document.getElementById("classe").value;
    const imgsrc = document.getElementById("imageHero");

    document.getElementById("esquerda").innerHTML = `<img src="imgs/`+ classe +`.png" id="imageHero">`;
}


