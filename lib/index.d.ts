export declare class NobakSDK {
    API_HOST: string;
    KEY: string;
    constructor({ KEY, NETWORK_PASSPHRASE }: {
        NETWORK_PASSPHRASE?: string;
        KEY?: string;
    });
    getServers(): Promise<any>;
}
