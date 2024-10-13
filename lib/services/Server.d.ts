export declare class Server {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    constructor({ API_HOST, KEY, USER_TOKEN }: {
        API_HOST: string;
        KEY: string;
        USER_TOKEN: string;
    });
    list(): Promise<any>;
    available(): Promise<any>;
    auth({ name }: {
        name: any;
    }): Promise<any>;
    verify({ name, signed_xdr }: {
        name: any;
        signed_xdr: any;
    }): Promise<any>;
}
