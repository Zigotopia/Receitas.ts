export function normalizarMoeda(moeda) {
    const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
    return Number.isNaN(numero) ? null : numero;
}
