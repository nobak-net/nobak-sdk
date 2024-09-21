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

  export { api };