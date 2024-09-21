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
    auth({ server_id }: {
        server_id: any;
    }): Promise<any>;
    verify({ server_id, signed_xdr }: {
        server_id: any;
        signed_xdr: any;
    }): Promise<any>;
}
