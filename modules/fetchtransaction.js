"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function fetchTransaction(url) {
    try {
        const response = await fetch(url);
        if (!response.ok)
            throw new Error(`erro no fetch ${response.status}`);
        const json = await response.json();
        return json;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        }
        return null;
    }
}
exports.default = fetchTransaction;
