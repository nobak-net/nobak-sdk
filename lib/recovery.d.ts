import { Account, Auth, Contract, Server } from "./services";
interface RecoverySDKConstructorProps {
    KEY: string;
    USER_TOKEN?: string;
    NETWORK?: 'TESTNET' | 'MAINNET';
}
declare class RecoverySDK {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    Auth: Auth;
    Contract: Contract;
    Account: Account;
    Server: Server;
    constructor({ KEY, USER_TOKEN, NETWORK }: RecoverySDKConstructorProps);
}
export { RecoverySDK };
