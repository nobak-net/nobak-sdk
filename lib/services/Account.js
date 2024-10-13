"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
const api_1 = require("./api");
class Account {
    constructor({ API_HOST, KEY, USER_TOKEN }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }
    async register({ type, value }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/accounts/register`, key: KEY, method: 'POST', body: { type, value }, userToken: USER_TOKEN });
        return response;
    }
    async verify({ value, state }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/accounts/verify`, key: KEY, method: 'POST', body: { value, state }, userToken: USER_TOKEN });
        return response;
    }
    async profile() {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await (0, api_1.api)({ url: `${API_HOST}/v1/accounts/profile`, key: KEY, method: 'GET', userToken: USER_TOKEN });
        return response;
    }
}
exports.Account = Account;
//# sourceMappingURL=Account.js.map