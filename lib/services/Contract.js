"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
const api_1 = require("./api");
const ContractType_1 = require("../types/ContractType");
class Contract {
    constructor({ API_HOST, KEY, USER_TOKEN, }) {
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
    async execute({ contract, data = {}, }) {
        // Validate contract
        if (!Object.values(ContractType_1.ContractType).includes(contract)) {
            throw new Error(`Unsupported contract type: ${contract}`);
        }
        // Construct the endpoint URL
        const url = `${this.API_HOST}/v1/contracts/${contract}`;
        // Prepare the request body based on contract type
        let body = { contract, data: {} };
        switch (contract) {
            case ContractType_1.ContractType.ADD_SIGNERS:
                if (!Array.isArray(data.server_ids) || data.server_ids.length < 2) {
                    throw new Error('At least two server_ids are required for Add Signers');
                }
                body.data.server_ids = data.server_ids;
                break;
            case ContractType_1.ContractType.REMOVE_SIGNERS:
                if (!Array.isArray(data.server_ids) || data.server_ids.length < 2) {
                    throw new Error('At least two server_ids are required for Remove Signers');
                }
                body.data.server_ids = data.server_ids;
                break;
            case ContractType_1.ContractType.SIGN:
                const { XDR } = data;
                body.data.XDR = XDR;
                break;
            default:
                throw new Error(`Unsupported contract type: ${contract}`);
        }
        // Make the API call
        const response = await (0, api_1.api)({
            url,
            key: this.KEY,
            method: 'POST',
            body,
            userToken: this.USER_TOKEN,
        });
        return response;
    }
}
exports.Contract = Contract;
//# sourceMappingURL=Contract.js.map