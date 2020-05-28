const chai = require('chai');
const config = require('config');

const Multichain = require('./helpers/multichain');
const crypto = require('./helpers/crypto');

let multichain = new Multichain(
    config.get('node0.url'), 
    config.get('chain.name'), 
    { 
        'username': config.get('node0.username'), 
        'password': config.get('node0.password')
    }
);

describe('Sandbox tests', function() {
    it('should assert true', function() {
        chai.assert.isTrue(true);
    });
    it('should be able to get basic chain info', async function() {
        const info = (await multichain.getInfo()).data;
        console.log(info);
    });
    it('should be able to list assets', async function() {
        const info = (await multichain.listAssets()).data;
        console.log(info);
    });
    it('should be able to issue assets', async function() {
        const newAsset = crypto.randomString(10);
        const res = (await multichain.issue(config.get('node0.address0'), newAsset, 1000, 0.01)).data;
        console.log(res)
    });
    it.only('should be able to get wallet transactions by id', async function() {
        const txId = '1398a08d783eb95ab259bd8c6d75682205c61d3ac820e878e4e7540eae9d995a';
        const res = (await multichain.getWalletTransaction(txId)).data;
        console.log(res);
    });
    it.only('should be able to get raw transactions by id', async function() {
        const txId = '1398a08d783eb95ab259bd8c6d75682205c61d3ac820e878e4e7540eae9d995a';
        const res = (await multichain.getRawTransaction(txId)).data;
        console.log(res);
    });
});