export default function countBy(arr: (number | string)[]) {
	return arr.reduce((acc: countby, atual) => {
		acc[atual] = (acc[atual] || 0) + 1;
		return acc;
	}, {});
}

export interface countby {
	[key: string]: number;
}
