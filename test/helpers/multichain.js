const axios = require('axios');
const config = require('config');

const chainName = config.get('chain.name');

async function getInfo() {
    const body = {
        'method': 'getinfo',
        'params': [],
        'id': 1,
        'chain_name': chainName
    };
    return rpc(body);
}

async function listAssets() {
    const body = {
        'method': 'listassets',
        'params': [],
        'id': 1,
        'chain_name': chainName
    };
    return rpc(body);
}

async function issue(address, asset, qty = 1, nativeAmount = 1) {
    const body = {
        'method': 'issue',
        'params': [address, asset, qty, nativeAmount],
        'id': 1,
        'chain_name': chainName
    };
    return rpc(body);
}

async function getWalletTransaction(txId) {
    const body = {
        'method': 'getwallettransaction',
        'params': [txId],
        'id': 1,
        'chain_name': chainName
    };
    return rpc(body)
}

async function getRawTransaction(txId) {
    const body = {
        'method': 'getrawtransaction',
        'params': [txId],
        'id': 1,
        'chain-name': chainName
    };
    return rpc(body);
}

async function rpc(body) {
    const url = config.get('node1.url')
    return axios.post(
        url,
        body,
        {
            auth: {
                username: config.get('node1.username'),
                password: config.get('node1.password')
            }
        }
    )
}

module.exports = {
    getInfo,
    listAssets,
    issue,
    getWalletTransaction,
    getRawTransaction
}