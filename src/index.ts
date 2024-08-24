interface FetchI {
  url: string;
  key: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object | undefined;
}

const api = async ({ url, key, method = 'GET', body = undefined}: FetchI) => {
  const headers: any = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` }
  try {
    const payload = await fetch(url, { method, headers, body: body && JSON.stringify(body) })    
    return payload ? await payload.json() : null
  } catch {
    return null;
  }
} 

export class NobakSDK {
    API_HOST = ''
    KEY = ''
    
    constructor({ KEY, NETWORK_PASSPHRASE }:{ NETWORK_PASSPHRASE?: string, KEY?: string}) {
      this.API_HOST = "http://localhost:8723";
      this.KEY = KEY ? KEY : '';
    }
  
    async getServers() {
      const response = await api({ url: this.API_HOST + '/v1/servers/list', key: this.KEY, method: 'GET'})
      return response;
    }
}