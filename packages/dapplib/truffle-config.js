require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt nasty bottom system blame develop remain essay grace casual flat sleep'; 
let testAccounts = [
"0x506753bb4dccb5874db6d2d4a740a7d35d3bdef56934fbbca09e33ff2d70f098",
"0xfa46ab14e36d5a93eaceaf3e02313d8969f3bda7ca4562361b070b404c05395f",
"0x67b8d10d5aad7b6e72c1528a4c86373f3cb97cdf4170998e98c4570f178ffe59",
"0x45b2c705bc9f2742305157a9ab077991ec712dd03f0f01d6b557cbf06db5570b",
"0xc5d6828dbaae38844db170b7487f6774e9807af1543ad564439c53579de6487f",
"0x22d2297ba36cbfb93a44ad4c00264defde9090ffca2c6743c35efbbfa25750a6",
"0x128ca883128544619f08dbe41f3484e12d62b6f4669e1bfaea47c55bc3e3cde7",
"0xaaa6ca1eeb93ddd3d7d658358242a6bc65445234004f0210a988af68da46ba57",
"0xb9769f3a5a7812bf531f2e4b55560d0bf8e5321f2fecadf3c5273e16fb4ae459",
"0xd3a2f36596f9db3df3bca41d084fde7584091e122c62a2214275fc939ff48312"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
