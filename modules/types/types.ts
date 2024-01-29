import { normalizarMoeda } from "../normalizarmoeda.js";
import stringToDate from "../stringtodate.js";

export interface transaçaoapi {
	Status: string;
	ID: number;
	Data: string;
	Nome: string;
	"Forma de Pagamento": string;
	Email: string;
	"Valor (R$)": string;
	"Cliente Novo": string;
}

export interface transacao {
	nome: string;
	id: number;
	data: Date;
	status: string;
	email: string;
	moeda: string;
	valor: number | null;
	pagamento: string;
	novo: boolean;
}

export function normalizarTransação(transacao: transaçaoapi): transacao {
	return {
		nome: transacao.Nome,
		id: transacao.ID,
		data: stringToDate(transacao.Data),
		status: transacao.Status,
		email: transacao.Email,
		moeda: transacao["Valor (R$)"],
		valor: normalizarMoeda(transacao["Valor (R$)"]),
		pagamento: transacao["Forma de Pagamento"],
		novo: Boolean(transacao["Cliente Novo"]),
	};
}
