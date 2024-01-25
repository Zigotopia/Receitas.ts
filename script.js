"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.preencherDados = exports.preencherLista = exports.preencherEstatistica = void 0;
const estatisticas_js_1 = __importDefault(require("./modules/estatisticas.js"));
const fetchtransaction_js_1 = __importDefault(require("./modules/fetchtransaction.js"));
const types_js_1 = require("./modules/types/types.js");
async function handeleData() {
    const transações = await (0, fetchtransaction_js_1.default)(" https://api.origamid.dev/json/transacoes.json");
    if (!transações)
        return null;
    const transação = transações.map(types_js_1.normalizarTransação);
    preencherEstatistica(transação);
    preencherDados(transação);
}
function preencherEstatistica(transacao) {
    const totalValor = document.querySelector("#total span");
    const data = new estatisticas_js_1.default(transacao);
    preencherLista(data.pagamento, "#pagamento");
    preencherLista(data.status, "#status");
    const melhorDia = document.querySelector("#melhordia");
    if (melhorDia)
        melhorDia.innerHTML += `<p>${data.semana[0]} : ${data.semana[1]} vendas</p>`;
    console.log(data);
    if (totalValor) {
        totalValor.innerText = `Total : ${data.total.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
        })}`;
    }
}
exports.preencherEstatistica = preencherEstatistica;
function preencherLista(obj, text) {
    const elemento = document.querySelector(text);
    for (const item in obj) {
        if (elemento)
            elemento.innerHTML += `<p>${item} : ${obj[item]}</p>`;
    }
}
exports.preencherLista = preencherLista;
function preencherDados(transacao) {
    const table = document.querySelector("#tabela tbody");
    for (const item of transacao) {
        if (table) {
            table.innerHTML += `
		<tr>
			<td>${item.nome}</td>
			<td>${item.email}</td>
			<td>R$ ${item.moeda}</td>
			<td>${item.pagamento}</td>
			<td>${item.status}</td>
		 </tr>
		`;
        }
    }
}
exports.preencherDados = preencherDados;
handeleData();
