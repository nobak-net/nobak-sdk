import { ContractType } from '../types/ContractType';
interface ExecuteContractProps {
    contract: ContractType;
    data?: any;
}
declare class Contract {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
    constructor({ API_HOST, KEY, USER_TOKEN, }: {
        API_HOST: string;
        KEY: string;
        USER_TOKEN: string;
    });
    /**
     * Executes a contract based on the provided contract type and data.
     * @param contract - The type of contract to execute.
     * @param data - The data required to execute the contract (optional).
     * @returns The response from the API.
     */
    execute({ contract, data, }: ExecuteContractProps): Promise<any>;
}
export { Contract };
