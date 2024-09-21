interface AuthProps {
    API_HOST: string;
    KEY: string;
}
declare class Auth {
    API_HOST: string;
    KEY: string;
    constructor({ API_HOST, KEY }: AuthProps);
    register({ stellar_address }: {
        stellar_address: any;
    }): Promise<any>;
    verify({ stellar_address, XDR }: {
        stellar_address: any;
        XDR: any;
    }): Promise<any>;
}
export { Auth };
