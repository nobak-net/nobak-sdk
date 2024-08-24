"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobakSDK = void 0;
const api = async ({ url, key, method = 'GET', body = undefined }) => {
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` };
    try {
        const payload = await fetch(url, { method, headers, body: body && JSON.stringify(body) });
        return payload ? await payload.json() : null;
    }
    catch {
        return null;
    }
};
class NobakSDK {
    constructor({ KEY, NETWORK_PASSPHRASE }) {
        this.API_HOST = '';
        this.KEY = '';
        this.API_HOST = "http://localhost:8723";
        this.KEY = KEY ? KEY : '';
    }
    async getServers() {
        const response = await api({ url: this.API_HOST + '/v1/servers/list', key: this.KEY, method: 'GET' });
        return response;
    }
}
exports.NobakSDK = NobakSDK;
//# sourceMappingURL=index.js.map