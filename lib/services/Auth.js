"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const api_1 = require("./api");
class Auth {
    constructor({ API_HOST, KEY }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
    }
    async register({ stellar_address }) {
        const { API_HOST, KEY } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/registrations`, key: KEY, method: 'POST', body: { stellar_address } });
        return response;
    }
    async verify({ stellar_address, XDR }) {
        const { API_HOST, KEY } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/verify`, key: KEY, method: 'POST', body: { stellar_address, XDR } });
        return response;
    }
}
exports.Auth = Auth;
//# sourceMappingURL=Auth.js.map