import Estastistica from "./modules/estatisticas.js";
import fetchTransaction from "./modules/fetchtransaction.js";
import { normalizarTransação, } from "./modules/types/types.js";
async function handeleData() {
    const transações = await fetchTransaction(" https://api.origamid.dev/json/transacoes.json");
    if (!transações)
        return null;
    const transação = transações.map(normalizarTransação);
    preencherEstatistica(transação);
    preencherDados(transação);
}
export function preencherEstatistica(transacao) {
    const totalValor = document.querySelector("#total span");
    const data = new Estastistica(transacao);
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
export function preencherLista(obj, text) {
    const elemento = document.querySelector(text);
    for (const item in obj) {
        if (elemento)
            elemento.innerHTML += `<p>${item} : ${obj[item]}</p>`;
    }
}
export function preencherDados(transacao) {
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
handeleData();
