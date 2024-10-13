import { api } from './api';

export class Server {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;

    constructor({ API_HOST, KEY, USER_TOKEN }: { API_HOST: string; KEY: string; USER_TOKEN: string }) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
        this.USER_TOKEN = USER_TOKEN;
    }

    async list() {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/list`, key: KEY, method: 'GET', userToken: USER_TOKEN })
        return response;
    }

    async available() {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'GET', userToken: USER_TOKEN })
        return response;
    }

    async auth({ name }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/auth`, key: KEY, method: 'POST', body: { name }, userToken: USER_TOKEN })
        return response;
    }

    async verify({ name, signed_xdr }) {
        const { API_HOST, KEY, USER_TOKEN } = this;
        const response = await api({ url: `${API_HOST}/v1/servers/verify`, key: KEY, method: 'POST', body: { name, signed_xdr }, userToken: USER_TOKEN })
        return response;
    }

}