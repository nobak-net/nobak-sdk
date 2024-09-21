import { api } from './api';

interface AuthProps {
    API_HOST: string;
    KEY: string;
  }
  
class Auth {
    API_HOST: string;
    KEY: string;

    constructor({ API_HOST, KEY }: AuthProps) {
        this.API_HOST = API_HOST;
        this.KEY = KEY;
    }


    async register({ stellar_address }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/registrations`, key: KEY, method: 'POST', body: { stellar_address } })
        return response;
    }

    async verify({ stellar_address, XDR }) {
        const { API_HOST, KEY } = this;
        const response = await api({ url: `${API_HOST}/v1/verify`, key: KEY, method: 'POST', body: { stellar_address, XDR } })
        return response;
    }
}

export { Auth }