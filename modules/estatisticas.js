"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countBy_js_1 = __importDefault(require("./countBy.js"));
class Estastistica {
    transações;
    total;
    pagamento;
    status;
    semana;
    constructor(transações) {
        this.transações = transações;
        this.total = this.setTotal();
        this.pagamento = this.setPagamento();
        this.status = this.setStatus();
        this.semana = this.setSemana();
    }
    setTotal() {
        return this.transações
            .filter((transacao) => transacao.valor != null)
            .reduce((acc, next) => {
            return next.valor ? acc + next.valor : acc;
        }, 0);
    }
    setPagamento() {
        const pagamento = this.transações.map(({ pagamento }) => pagamento);
        return (0, countBy_js_1.default)(pagamento);
    }
    setStatus() {
        const status = this.transações.map(({ status }) => status);
        return (0, countBy_js_1.default)(status);
    }
    setSemana() {
        const diasdaSemana = [
            "Domingo",
            "Segunda",
            "Terça",
            "Quarta",
            "Quinta",
            "Sexta",
            "Sabado",
        ];
        const semana = this.transações.reduce((acc, { data }) => {
            const diaDaSemana = diasdaSemana[data.getDay()];
            if (!acc[diaDaSemana]) {
                acc[diaDaSemana] = 0;
            }
            acc[diaDaSemana]++;
            return acc;
        }, {});
        const diaComMaiorNumero = Object.entries(semana).sort((a, b) => b[1] - a[1])[0];
        return diaComMaiorNumero;
    }
}
exports.default = Estastistica;
