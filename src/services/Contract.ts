import { api } from './api';
import { ContractType } from '../types/ContractType';

interface ExecuteContractProps {
  contract: ContractType;
  data?: any;
}

class Contract {
  API_HOST: string;
  KEY: string;
  USER_TOKEN: string;

  constructor({
    API_HOST,
    KEY,
    USER_TOKEN,
  }: {
    API_HOST: string;
    KEY: string;
    USER_TOKEN: string;
  }) {
    this.API_HOST = API_HOST;
    this.KEY = KEY;
    this.USER_TOKEN = USER_TOKEN;
  }

  /**
   * Executes a contract based on the provided contract type and data.
   * @param contract - The type of contract to execute.
   * @param data - The data required to execute the contract (optional).
   * @returns The response from the API.
   */

  async execute({
    contract,
    data = {},
  }: ExecuteContractProps) {
    // Validate contract
    if (!Object.values(ContractType).includes(contract)) {
      throw new Error(`Unsupported contract type: ${contract}`);
    }

    // Construct the endpoint URL
    const url = `${this.API_HOST}/v1/contracts/${contract}`;

    // Prepare the request body based on contract type
    let body: any = { contract, data: {} };

    switch (contract) {
      case ContractType.ADD_SIGNERS:
        if (!Array.isArray(data.server_ids) || data.server_ids.length < 2) {
          throw new Error('At least two server_ids are required for Add Signers');
        }
        body.data.server_ids = data.server_ids;
        break;

      case ContractType.REMOVE_SIGNERS:
        if (!Array.isArray(data.server_ids) || data.server_ids.length < 2) {
          throw new Error('At least two server_ids are required for Remove Signers');
        }
        body.data.server_ids = data.server_ids;
        break;

      case ContractType.SIGN:
        const { XDR } = data;
        body.data.XDR = XDR;
        break;

      default:
        throw new Error(`Unsupported contract type: ${contract}`);
    }

    // Make the API call
    const response = await api({
      url,
      key: this.KEY,
      method: 'POST',
      body,
      userToken: this.USER_TOKEN,
    });

    return response;
  }
}

export { Contract };