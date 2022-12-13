const controle = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const botaoCor = document.querySelectorAll("[data-btn]");
const fotoRobo = document.querySelector(".robo");

const pecas = {
  bracos: {
    forca: 29,
    poder: 35,
    energia: -21,
    velocidade: -5,
  },

  blindagem: {
    forca: 41,
    poder: 20,
    energia: 0,
    velocidade: -20,
  },
  nucleos: {
    forca: 0,
    poder: 7,
    energia: 48,
    velocidade: -14,
  },
  pernas: {
    forca: 27,
    poder: 21,
    energia: -32,
    velocidade: 52,
  },
  foguetes: {
    forca: 0,
    poder: 28,
    energia: 0,
    velocidade: -2,
  },
};

controle.forEach((element) => {
  element.addEventListener("click", (event) => {
    manipulaDados(event.target.dataset.controle, event.target.parentNode);
    atualizaEstatisticas(event.target.dataset.peca);
  });
});

function manipulaDados(operacao, controle) {
  const peca = controle.querySelector("[data-contador]");
  if (operacao === "-") {
    peca.value = parseInt(peca.value) - 1;
  } else {
    peca.value = parseInt(peca.value) + 1;
  }
}

function atualizaEstatisticas(peca) {
  estatisticas.forEach((element) => {
    element.textContent =
      parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
  });
}

function mudarCorRobo(botaoCor) {
  document.querySelector(".robo").src =
    "img/Robotron/Robotron 2000 - " + botaoCor + ".png";
}

botaoCor.forEach((element) => {
  element.addEventListener("click", () => {
    mudarCorRobo(element.dataset.btn);
  });
});
