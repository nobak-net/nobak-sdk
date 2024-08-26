interface FetchI {
  url: string;
  key: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object | undefined;
  userToken?: string;
}

const api = async ({ url, key, method = 'GET', body = undefined, userToken }: FetchI) => {
  const headers: any = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` }
  try {
    if (typeof userToken === 'string' && userToken) {
      headers['User-Token'] = userToken
    }
    const payload = await fetch(url, { method, headers, body: body && JSON.stringify(body) })
    return payload ? await payload.json() : null
  } catch {
    return null;
  }
}

interface NobakSDKConstructorProps {
  KEY: string;
  USER_TOKEN?: string;
  NETWORK_PASSPHRASE?: string;
}

interface AuthProps {
  API_HOST: string;
  KEY: string;
}

class NobakSDK {
  API_HOST = '';
  KEY = '';
  USER_TOKEN = '';
  Auth: Auth;
  Contract: Contract;
  Account: Account;
  Server: Server;

  constructor({ KEY, USER_TOKEN, NETWORK_PASSPHRASE }: NobakSDKConstructorProps) {
    this.API_HOST = "http://localhost:8723";
    this.KEY = KEY ? KEY : '';
    
    this.Auth = new Auth({ API_HOST: this.API_HOST, KEY: this.KEY });
    this.Account = new Account({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
    this.Contract = new Contract({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
    this.Server = new Server({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
  }
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

class Account {
  API_HOST: string;
  KEY: string;
  USER_TOKEN: string;

  constructor({ API_HOST, KEY, USER_TOKEN }: { API_HOST: string; KEY: string; USER_TOKEN: string }) {
    this.API_HOST = API_HOST;
    this.KEY = KEY;
    this.USER_TOKEN = USER_TOKEN;
  }


  async accountRegister({ type, value }) {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/accounts/register`, key: KEY, method: 'POST', body: { type, value } })
    return response;
  }

  async accountVerify({ type, value }) {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/accounts/verify`, key: KEY, method: 'POST', body: { type, value } })
    return response;
  }

  async accountProfile() {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/accounts/profile`, key: KEY, method: 'GET' })
    return response;
  }
}

class Contract {
  API_HOST: string;
  KEY: string;
  USER_TOKEN: string;

  constructor({ API_HOST, KEY, USER_TOKEN }: { API_HOST: string; KEY: string; USER_TOKEN: string }) {
    this.API_HOST = API_HOST;
    this.KEY = KEY;
    this.USER_TOKEN = USER_TOKEN;
  }

  async addServers({ server_ids }) {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/contracts/add_servers_signers`, key: KEY, method: 'POST', body: { server_ids } })
    return response;
  }

  async removeServers({ server_ids }) {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/contracts/add_servers_signers`, key: KEY, method: 'POST', body: { server_ids } })
    return response;
  }

  async signRecovery() {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/contracts/sign`, key: KEY, method: 'POST' })
    return response;
  }
}


class Server {
  API_HOST: string;
  KEY: string;
  USER_TOKEN: string;

  constructor({ API_HOST, KEY, USER_TOKEN }: { API_HOST: string; KEY: string; USER_TOKEN: string }) {
    this.API_HOST = API_HOST;
    this.KEY = KEY;
    this.USER_TOKEN = USER_TOKEN;
  }

  async list() {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/servers/list`, key: KEY, method: 'GET' })
    return response;
  }

  async available() {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'GET' })
    return response;
  }

  async auth({ server_id }) {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'POST', body: { server_id } })
    return response;
  }

  async verify({ server_id, signed_xdr }) {
    const { API_HOST, KEY } = this;
    const response = await api({ url: `${API_HOST}/v1/servers/available`, key: KEY, method: 'POST', body: { server_id, signed_xdr } })
    return response;
  }

}



export { NobakSDK };