// CAPTURANDO OS ELEMENTOS DO HTML
const pedra = document.getElementById("rock");
const papel = document.getElementById("paper");
const tisoura = document.getElementById("scissors");
const result = document.getElementById("result");
const humanoGif = document.getElementById("valor-humano");
const roboGif = document.getElementById("valor-robo");
const imgGif = document.querySelector(".img-gif")
const imgGifR = document.querySelector(".img-gif-r");
const placarHumano = document.getElementById("placa-humano");
const placarRobo = document.getElementById("placa-robo");
const vitoriaImg = document.querySelector(".img-vitoria");
const vitoria = document.getElementById("vitoria");
const butReset = document.querySelector(".but-reset");

// VARIÁVEIS DE CONTROLE DO JOGO
let pontosHomen = 0;
let pontosMaquina = 0;
const pontosMax = 3;

// FUNÇÃO PARA ATUALIZAR O PLACAR
function atualisarPlacar () {
  placarHumano.innerHTML = `${pontosHomen}`;
  placarRobo.innerHTML = `${pontosMaquina}`;

  vencedor(pontosHomen, pontosMaquina);
  maxPontuacao(pontosHomen, pontosMaquina);
}

// JOGADA DO HUMANO 
function playHumano(humanChoice) {
  const play = playMaquina();

  playTheGame(humanChoice, play);
  playGit(humanChoice, play);
}

// JOGADA DA MÁQUINA (ALEATÓRIA)
const playMaquina = () => {
  const escolha = ["pedra", "papel", "tesoura"]
  const rodarNumero = Math.floor(Math.random() * 3);

  return escolha[rodarNumero];
};

// LÓGICA DO JOGO
const playTheGame = (homen, maquina) => {
  
  if (homen === maquina) {
    result.innerHTML = "Empate!";
  } else if ((homen === "pedra") && (maquina === "tesoura")) {
    pontosHomen++
    result.innerHTML = "Você fez 1 ponto";
  } else if ((homen === "pedra") && (maquina === "papel")) {
    pontosMaquina++
    result.innerHTML = "Robô fez 1 ponto";
  } else if ((homen === "papel") && (maquina === "pedra")) {
    pontosHomen++
    result.innerHTML = "Você fez 1 ponto";
  } else if ((homen === "papel") && (maquina === "tesoura")) {
    pontosMaquina++
    result.innerHTML = "Robô fez 1 ponto";
  } else if ((homen === "tesoura") && (maquina === "papel")) {
    pontosHomen++
    result.innerHTML = "Você fez 1 ponto";
  } else if ((homen === "tesoura") && (maquina === "pedra")) {
    pontosMaquina++
    result.innerHTML = "Robô fez 1 ponto";
  }

  atualisarPlacar()
};

// VERIFICA QUEM VENCEU O JOGO
function vencedor (pontosHomen, pontosMaquina){
  if (pontosHomen === 3) {
    vitoria.src ='img/trofel-vitoria.png';
    vitoriaImg.style.display = "block";
  } else if (pontosMaquina === 3) {
    vitoria.src = 'img/robô.png'
    vitoriaImg.style.display = "block"
  }

  if (pontosHomen === 3 ){
     result.innerHTML = `Você ganhou!!`;

     reset();
  } else if (pontosMaquina === 3) {
    result.innerHTML = `Robô ganhou!!`;

    reset();
  }
}

// TROCA OS GIFS
const playGit = (homenEscolha, maquinaEscolha) => {
  trocarGif(humanoGif, homenEscolha);
  trocarGif(roboGif, maquinaEscolha);

}

function trocarGif(jogador, escolha) {
   jogador.src = `img/${escolha}.gif`;
   imgGif.style.display = 'block';
   imgGifR.style.display = 'block';
}

// MOSTRA BOTÃO DE RESET
function reset() {
  butReset.style.display = 'block';
  
}

// RESETAR O JOGO
function botaoReset (renicia) {
   pontosHomen = 0;
   pontosMaquina = 0;

   if(renicia = true) {
    result.innerHTML = "Faça sua escolha!"
    placarHumano.innerHTML = `${pontosHomen}`;
    placarRobo.innerHTML = `${pontosMaquina}`;
    butReset.style.display = 'none';
    vitoriaImg.style.display = "none";
    imgGif.style.display = 'none';
    imgGifR.style.display = 'none';
    pedra.disabled = false;
    papel.disabled = false;
    tisoura.disabled = false;

    atualisarPlacar()
  }
}

// BLOQUEIA JOGO AO CHEGAR NO LIMITE
function maxPontuacao(homen, robo) {

  if (homen === 3 || robo === 3){
  pedra.disabled = true;
  papel.disabled = true;
  tisoura.disabled = true;
  }
}


// EVENTOS DE CLIQUE
pedra.addEventListener("click", () => {
  playHumano("pedra");
});
papel.addEventListener("click", () => {
  playHumano("papel");
});
tisoura.addEventListener("click", () => {
  playHumano("tesoura");
  
});

