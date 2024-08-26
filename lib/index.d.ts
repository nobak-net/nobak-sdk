interface NobakSDKConstructorProps {
    KEY: string;
    USER_TOKEN?: string;
    NETWORK_PASSPHRASE?: string;
}
interface AuthProps {
    API_HOST: string;
    KEY: string;
}
declare class NobakSDK {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    Auth: Auth;
    Contract: Contract;
    Account: Account;
    Server: Server;
    constructor({ KEY, USER_TOKEN, NETWORK_PASSPHRASE }: NobakSDKConstructorProps);
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
declare class Account {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    constructor({ API_HOST, KEY, USER_TOKEN }: {
        API_HOST: string;
        KEY: string;
        USER_TOKEN: string;
    });
    accountRegister({ type, value }: {
        type: any;
        value: any;
    }): Promise<any>;
    accountVerify({ type, value }: {
        type: any;
        value: any;
    }): Promise<any>;
    accountProfile(): Promise<any>;
}
declare class Contract {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    constructor({ API_HOST, KEY, USER_TOKEN }: {
        API_HOST: string;
        KEY: string;
        USER_TOKEN: string;
    });
    addServers({ server_ids }: {
        server_ids: any;
    }): Promise<any>;
    removeServers({ server_ids }: {
        server_ids: any;
    }): Promise<any>;
    signRecovery(): Promise<any>;
}
declare class Server {
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
export { NobakSDK };
