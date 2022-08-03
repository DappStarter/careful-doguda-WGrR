require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue off smooth fine birth museum undo install cart equal gate'; 
let testAccounts = [
"0xd7017ebfc4f30f8d1760e722995997f503148c378569f6b0dc49f8dc5ae2f404",
"0xc45504be5fd2b44c82f85cd5e5ad949295df87df702eb4296702d9c882768e1b",
"0xbe1959ea227036170d8ebaff9ce665e6960e2dc8abdcb6e2b5b34b77e99fda75",
"0x93f55f976223b29913c6d61c0a02164f2bc76ddfa3e1aeda4e23955b975dfae3",
"0xbee8a1f8d25f02de63e75c6f8e39b5e2d732a590fe86c320079d4d77913a62ba",
"0x7e626eef9f02a98acbc4cf11a29ab90de0fcb7c99d2ec63f61386b8c1c86c709",
"0x4f2de69d76580dda9879ea0d03e4b629e9f1938a383c7ad13d30db4d4f7a97dc",
"0x3bc1ee82700ba9232a2af0f2b0dceb3a6c609dc7aafbdbc178665151093627f3",
"0xddb4b1b628d9c649159551a20bc1218972ca0c8a7486740a3ff7d9aed08b7d04",
"0x5b1ebb69944c972697f5a55aa6b1920cca96ffc12d4013ab6ce0732d15814e7f"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

