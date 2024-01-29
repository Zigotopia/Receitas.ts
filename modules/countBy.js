export default function countBy(arr) {
    return arr.reduce((acc, atual) => {
        acc[atual] = (acc[atual] || 0) + 1;
        return acc;
    }, {});
}
