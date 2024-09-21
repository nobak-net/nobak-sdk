import { Account, Auth, Contract, Server } from "./services";

interface RecoverySDKConstructorProps {
  KEY: string;
  USER_TOKEN?: string;
  NETWORK?: 'TESTNET' | 'MAINNET';
}

class RecoverySDK {
  API_HOST = '';
  KEY = '';
  USER_TOKEN = '';
  Auth: Auth;
  Contract: Contract;
  Account: Account;
  Server: Server;

  constructor({ KEY, USER_TOKEN, NETWORK }: RecoverySDKConstructorProps) {
    this.API_HOST = NETWORK === 'TESTNET' ? "http://localhost:8723" : "http://localhost:8723";
    this.KEY = KEY ? KEY : '';
    this.USER_TOKEN = USER_TOKEN ? USER_TOKEN : '';

    this.Auth = new Auth({ API_HOST: this.API_HOST, KEY: this.KEY });
    this.Account = new Account({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
    this.Contract = new Contract({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
    this.Server = new Server({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
  }
}

export { RecoverySDK };