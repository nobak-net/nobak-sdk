"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobakSDK = void 0;
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
class NobakSDK {
    constructor({ KEY, USER_TOKEN, NETWORK_PASSPHRASE }) {
        this.API_HOST = '';
        this.KEY = '';
        this.USER_TOKEN = '';
        this.API_HOST = "http://localhost:8723";
        this.KEY = KEY ? KEY : '';
        this.Auth = new Auth({ API_HOST: this.API_HOST, KEY: this.KEY });
        this.Account = new Account({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
        this.Contract = new Contract({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
        this.Server = new Server({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
    }
}
exports.NobakSDK = NobakSDK;
class Auth {
    constructor({ API_HOST, KEY }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
    }
    async register({ stellar_address }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/registrations`, key: KEY, method: 'POST', body: { stellar_address } });
        return response;
    }
    async verify({ stellar_address, XDR }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/verify`, key: KEY, method: 'POST', body: { stellar_address, XDR } });
        return response;
    }
}
class Account {
    constructor({ API_HOST, KEY, USER_TOKEN }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }
    async accountRegister({ type, value }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/accounts/register`, key: KEY, method: 'POST', body: { type, value } });
        return response;
    }
    async accountVerify({ type, value }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/accounts/verify`, key: KEY, method: 'POST', body: { type, value } });
        return response;
    }
    async accountProfile() {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/accounts/profile`, key: KEY, method: 'GET' });
        return response;
    }
}
class Contract {
    constructor({ API_HOST, KEY, USER_TOKEN }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }
    async addServers({ server_ids }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/contracts/add_servers_signers`, key: KEY, method: 'POST', body: { server_ids } });
        return response;
    }
    async removeServers({ server_ids }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/contracts/add_servers_signers`, key: KEY, method: 'POST', body: { server_ids } });
        return response;
    }
    async signRecovery() {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/contracts/sign`, key: KEY, method: 'POST' });
        return response;
    }
}
class Server {
    constructor({ API_HOST, KEY, USER_TOKEN }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }
    async list() {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/list`, key: KEY, method: 'GET' });
        return response;
    }
    async available() {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'GET' });
        return response;
    }
    async auth({ server_id }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'POST', body: { server_id } });
        return response;
    }
    async verify({ server_id, signed_xdr }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'POST', body: { server_id, signed_xdr } });
        return response;
    }
}
//# sourceMappingURL=index.js.map