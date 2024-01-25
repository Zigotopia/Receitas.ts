"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countBy(arr) {
    return arr.reduce((acc, atual) => {
        acc[atual] = (acc[atual] || 0) + 1;
        return acc;
    }, {});
}
exports.default = countBy;
