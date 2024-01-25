"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizarMoeda = void 0;
function normalizarMoeda(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return Number.isNaN(numero) ? null : numero;
}
exports.normalizarMoeda = normalizarMoeda;
