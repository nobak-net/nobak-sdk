"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecoverySDK = void 0;
const services_1 = require("./services");
class RecoverySDK {
    constructor({ KEY, USER_TOKEN, NETWORK }) {
        this.API_HOST = '';
        this.KEY = '';
        this.USER_TOKEN = '';
        this.API_HOST = NETWORK === 'TESTNET' ? "http://localhost:8723" : "http://localhost:8723";
        this.KEY = KEY ? KEY : '';
        this.USER_TOKEN = USER_TOKEN ? USER_TOKEN : '';
        this.Auth = new services_1.Auth({ API_HOST: this.API_HOST, KEY: this.KEY });
        this.Account = new services_1.Account({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
        this.Contract = new services_1.Contract({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
        this.Server = new services_1.Server({ API_HOST: this.API_HOST, KEY: this.KEY, USER_TOKEN: this.USER_TOKEN });
    }
}
exports.RecoverySDK = RecoverySDK;
//# sourceMappingURL=recovery.js.map