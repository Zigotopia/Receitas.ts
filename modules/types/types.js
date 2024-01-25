"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizarTransação = void 0;
const normalizarmoeda_js_1 = require("../normalizarmoeda.js");
const stringtodate_js_1 = __importDefault(require("../stringtodate.js"));
function normalizarTransação(transacao) {
    return {
        nome: transacao.Nome,
        id: transacao.ID,
        data: (0, stringtodate_js_1.default)(transacao.Data),
        status: transacao.Status,
        email: transacao.Email,
        moeda: transacao["Valor (R$)"],
        valor: (0, normalizarmoeda_js_1.normalizarMoeda)(transacao["Valor (R$)"]),
        pagamento: transacao["Forma de Pagamento"],
        novo: Boolean(transacao["Cliente Novo"]),
    };
}
exports.normalizarTransação = normalizarTransação;
