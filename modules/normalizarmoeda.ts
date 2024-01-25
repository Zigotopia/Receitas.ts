export function normalizarMoeda(moeda: string): number | null {
	const numero = Number(moeda.replaceAll(".", "").replace(",", "."));
	return Number.isNaN(numero) ? null : numero;
}
