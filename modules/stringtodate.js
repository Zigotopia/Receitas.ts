"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function stringToDate(text) {
    const [data, horario] = text.split(" ");
    const [dia, mes, ano] = data.split("/").map(Number);
    const [horas, minutos] = horario.split(":").map(Number);
    const date = new Date(ano, mes - 1, dia, horas, minutos);
    return date;
}
exports.default = stringToDate;
