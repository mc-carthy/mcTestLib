const axios = require('axios');
const config = require('config');

class Multichain {
    constructor(url, chainName, auth) {
        this.url = url;
        this.chainName = chainName;
        this.username = auth.username;
        this.password = auth.password;
    }

    async getInfo() {
        const body = {
            'method': 'getinfo',
            'params': [],
            'id': 1
        };
        return this.rpc(body);
    }

    async listAssets() {
        const body = {
            'method': 'listassets',
            'params': [],
            'id': 1
        };
        return this.rpc(body);
    }

    async issue(address, asset, qty = 1, nativeAmount = 1) {
        const body = {
            'method': 'issue',
            'params': [address, asset, qty, nativeAmount],
            'id': 1
        };
        return this.rpc(body);
    }

    async getWalletTransaction(txId) {
        const body = {
            'method': 'getwallettransaction',
            'params': [txId],
            'id': 1
        };
        return this.rpc(body)
    }

    async getRawTransaction(txId) {
        const body = {
            'method': 'getrawtransaction',
            'params': [txId],
            'id': 1
        };
        return this.rpc(body);
    }

    async rpc(body) {
        body.chain_name = this.chainName;
        return axios.post(
            this.url,
            body,
            {
                auth: {
                    username: this.username,
                    password: this.password
                }
            }
        )
    }
}

module.exports = Multichain