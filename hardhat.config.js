require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ftm.tools",
        accounts: [0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d]
      }
    },
  }
};

