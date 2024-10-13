declare class Account {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    constructor({ API_HOST, KEY, USER_TOKEN }: {
        API_HOST: string;
        KEY: string;
        USER_TOKEN: string;
    });
    register({ type, value }: {
        type: any;
        value: any;
    }): Promise<any>;
    verify({ value, state }: {
        value: any;
        state: any;
    }): Promise<any>;
    profile(): Promise<any>;
}
export { Account };
