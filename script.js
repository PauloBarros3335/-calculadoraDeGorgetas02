const textos = {
  pt: {
    titulo: "Calculadora de Gorjetas",
    conta: "Quanto ficou a conta",
    servico: "Como foi o serviço?",
    pessoas: "Quantas pessoas vão dividir a conta?",
    calcular: "Calcular!",
    limpar: "Limpar",
    alternarTema: "Alternar Tema",
    valorPagar: "Valor a pagar: R$",
    cada: "cada",
    copiar: "Copiar valor",
  },
  en: {
    titulo: "Tip Calculator",
    conta: "How much is the bill?",
    servico: "How was the service?",
    pessoas: "How many people will split the bill?",
    calcular: "Calculate!",
    limpar: "Clear",
    alternarTema: "Toggle Theme",
    valorPagar: "Total to pay: $",
    cada: "each",
    copiar: "Copy value",
  },
  es: {
    titulo: "Calculadora de Propinas",
    conta: "¿Cuánto fue la cuenta?",
    servico: "¿Cómo fue el servicio?",
    pessoas: "¿Cuántas personas dividirán la cuenta?",
    calcular: "¡Calcular!",
    limpar: "Limpiar",
    alternarTema: "Cambiar tema",
    valorPagar: "Total a pagar: $",
    cada: "cada",
    copiar: "Copiar valor",
  },
};

let idiomaAtual = "pt";

function alterarIdioma() {
  idiomaAtual = document.getElementById("idioma").value;
  document.querySelector(".titulo").textContent = textos[idiomaAtual].titulo;
  document.querySelector('label[for="conta"] p').textContent =
    textos[idiomaAtual].conta;
  document.querySelector('label[for="qualidadeServico"] p').textContent =
    textos[idiomaAtual].servico;
  document.querySelector('label[for="pessoas"] p').textContent =
    textos[idiomaAtual].pessoas;
  document.getElementById("calcular").textContent =
    textos[idiomaAtual].calcular;
  document.getElementById("limpar").textContent = textos[idiomaAtual].limpar;
  document.getElementById("alternarTema").textContent =
    textos[idiomaAtual].alternarTema;
  document.getElementById("copiar").textContent = textos[idiomaAtual].copiar;
}

function calcularGorjeta(event) {
  event.preventDefault();

  let conta = document.getElementById("conta").value;
  let qualidadeServico = document.getElementById("qualidadeServico").value;
  let numPessoas = document.getElementById("pessoas").value;

  if (conta === "" || qualidadeServico == 0) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (numPessoas === "" || numPessoas <= 1) {
    numPessoas = 1;
    document.getElementById("cada").style.display = "none";
  } else {
    document.getElementById("cada").style.display = "inline";
  }

  let total =
    (parseFloat(conta) * (1 + parseFloat(qualidadeServico) / 100)) /
    parseInt(numPessoas);
  total = total.toFixed(2);

  document.getElementById("gorjeta").textContent = total;
  document.getElementById("totalGorjeta").style.display = "block";
  document.getElementById("copiar").style.display = "inline";
}

function limparCampos() {
  document.getElementById("formularioGorjetas").reset();
  document.getElementById("totalGorjeta").style.display = "none";
  document.getElementById("copiar").style.display = "none";
  document.getElementById("cada").style.display = "inline";
}

function alternarTema() {
  document.body.classList.toggle("dark-theme");
}

document
  .getElementById("formularioGorjetas")
  .addEventListener("submit", calcularGorjeta);
document.getElementById("limpar").addEventListener("click", limparCampos);
document.getElementById("alternarTema").addEventListener("click", alternarTema);
document.getElementById("copiar").addEventListener("click", function () {
  const texto = document.getElementById("gorjeta").textContent;
  navigator.clipboard.writeText(texto);
});
