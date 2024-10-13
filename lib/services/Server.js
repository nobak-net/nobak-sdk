"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const api_1 = require("./api");
class Server {
    constructor({ API_HOST, KEY, USER_TOKEN }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }
    async list() {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/servers/list`, key: KEY, method: 'GET', userToken: USER_TOKEN });
        return response;
    }
    async available() {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'GET', userToken: USER_TOKEN });
        return response;
    }
    async auth({ name }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/servers/auth`, key: KEY, method: 'POST', body: { name }, userToken: USER_TOKEN });
        return response;
    }
    async verify({ name, signed_xdr }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/servers/verify`, key: KEY, method: 'POST', body: { name, signed_xdr }, userToken: USER_TOKEN });
        return response;
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map