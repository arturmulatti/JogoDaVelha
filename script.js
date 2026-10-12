let vez = "X";

const combinacoes = [
  ["c00", "c01", "c02"],
  ["c10", "c11", "c12"],
  ["c20", "c21", "c22"],

  ["c00", "c10", "c20"],
  ["c01", "c11", "c21"],
  ["c02", "c12", "c22"],

  ["c00", "c11", "c22"],
  ["c02", "c11", "c20"],
];
function verificaVitoria() {
  for (let combinacao of combinacoes) {
    if (
      document.getElementById(combinacao[0]).textContent ===
        document.getElementById(combinacao[1]).textContent &&
      document.getElementById(combinacao[0]).textContent ===
        document.getElementById(combinacao[2]).textContent &&
      document.getElementById(combinacao[2]).textContent != ""
    ) {
      return true;
    }
    return false;
  }
}
function marcarCasa(botao) {
  console.log("x");
  if (botao.textContent === "") {
    botao.textContent = vez;
    if (vez === "X") {
      vez = "O";
      document.getElementById("mensagem").textContent = "Vez do jogador O";
    } else {
      vez = "X";
      document.getElementById("mensagem").textContent = "Vez do jogador X";
    }
  }
  if (verificaVitoria()) {
    if (vez === "X") {
      alert("O vencedor foi o Jogador O");
    } else {
      alert("O jogador vencedor foi o X");
    }
  }
}
