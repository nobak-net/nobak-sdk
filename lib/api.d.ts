interface FetchI {
    url: string;
    key: string;
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: object | undefined;
    userToken?: string;
}
declare const api: ({ url, key, method, body, userToken }: FetchI) => Promise<any>;
export { api };
