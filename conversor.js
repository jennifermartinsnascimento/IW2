const taxaDeCambio = {
  USD: 1.0,
  EUR: 0.85,
  GBP: 0.73,
  JPY: 110.98,
  AUD: 1.36,
  CAD: 1.26,
};

function criarOpcoesMoeda() {
  const moedaOrigemSelect = document.getElementById("moedaOrigem");
  const moedaDestinoSelect = document.getElementById("moedaDestino");

  for (const moeda in taxaDeCambio) {
    const optionOrigem = document.createElement("option");
    const optionDestino = document.createElement("option");

    optionOrigem.value = moeda;
    optionOrigem.textContent = moeda;
    optionDestino.value = moeda;
    optionDestino.textContent = moeda;

    moedaOrigemSelect.appendChild(optionOrigem);
    moedaDestinoSelect.appendChild(optionDestino);
  }
}

function converterMoeda() {
  const moedaOrigem = document.getElementById("moedaOrigem").value;
  const moedaDestino = document.getElementById("moedaDestino").value;
  const quantidade = parseFloat(document.getElementById("quantidade").value);

  const valorConvertido =
    (quantidade / taxaDeCambio[moedaOrigem]) * taxaDeCambio[moedaDestino];

  const tabelaResultado = document.getElementById("tabelaResultado");
  tabelaResultado.innerHTML = "";

  const linha = document.createElement("tr");
  const colunaMoeda = document.createElement("td");
  const colunaValor = document.createElement("td");

  colunaMoeda.textContent = moedaDestino;
  colunaValor.textContent = `$${valorConvertido.toFixed(2)}`;

  linha.appendChild(colunaMoeda);
  linha.appendChild(colunaValor);

  tabelaResultado.appendChild(linha);
}

criarOpcoesMoeda();
