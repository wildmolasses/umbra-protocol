require('dotenv').config();
const HDWalletProvider = require('@truffle/hdwallet-provider');

const projectId = process.env.INFURA_API_KEY;
const mnemonic = process.env.MNEMONIC;

module.exports = {
  networks: {
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${projectId}`),
      networkId: 3,
      gasPrice: 10e9,
      gas: 5e6,
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${projectId}`),
      networkId: 4,
      gasPrice: 10e9,
      gas: 10e6,
    },
  },
};
