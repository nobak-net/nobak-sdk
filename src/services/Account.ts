import { api } from './api'

class Account {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;

    constructor({ API_HOST, KEY, USER_TOKEN }: { API_HOST: string; KEY: string; USER_TOKEN: string }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }


    async register({ type, value }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/accounts/register`, key: KEY, method: 'POST', body: { type, value }, userToken: USER_TOKEN })
        return response;
    }

    async verify({ value, state }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/accounts/verify`, key: KEY, method: 'POST', body: { value, state }, userToken: USER_TOKEN })
        return response;
    }

    async profile() {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/accounts/profile`, key: KEY, method: 'GET', userToken: USER_TOKEN })
        return response;
    }
}

export { Account };