"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = void 0;
const api = async ({ url, key, method = 'GET', body = undefined, userToken }) => {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` };
    try {
        if (typeof userToken === 'string' && userToken) {
            headers['User-Token'] = userToken;
        }
        const payload = await fetch(url, { method, headers, body: body && JSON.stringify(body) });
        return payload ? await payload.json() : null;
    }
    catch {
        return null;
    }
};
exports.api = api;
//# sourceMappingURL=api.js.map