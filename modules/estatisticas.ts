import countBy, { countby } from "./countBy.js";
import { transacao } from "./types/types.js";

export default class Estastistica {
	private transações;
	total;
	pagamento;
	status;
	semana;
	constructor(transações: transacao[]) {
		this.transações = transações;
		this.total = this.setTotal();
		this.pagamento = this.setPagamento();
		this.status = this.setStatus();
		this.semana = this.setSemana();
	}
	private setTotal() {
		return this.transações
			.filter((transacao) => transacao.valor != null)
			.reduce((acc, next) => {
				return next.valor ? acc + next.valor : acc;
			}, 0);
	}
	private setPagamento() {
		const pagamento = this.transações.map(({ pagamento }) => pagamento);
		return countBy(pagamento);
	}

	private setStatus() {
		const status = this.transações.map(({ status }) => status);
		return countBy(status);
	}

	private setSemana() {
		const diasdaSemana: string[] = [
			"Domingo",
			"Segunda",
			"Terça",
			"Quarta",
			"Quinta",
			"Sexta",
			"Sabado",
		];
		const semana = this.transações.reduce((acc: countby, { data }) => {
			const diaDaSemana = diasdaSemana[data.getDay()];
			if (!acc[diaDaSemana]) {
				acc[diaDaSemana] = 0;
			}
			acc[diaDaSemana]++;
			return acc;
		}, {});

		const diaComMaiorNumero = Object.entries(semana).sort(
			(a, b) => b[1] - a[1],
		)[0];
		return diaComMaiorNumero;
	}
}
