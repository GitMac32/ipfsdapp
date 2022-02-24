require("@nomiclabs/hardhat-waffle");

// Replace these private key with your Avalanche account private keys
// Be aware of NEVER adding private keys to GIT
const AVALANCHE_TEST_PRIVATE_KEY = "61406a3a0ff5688cc47cf346a10c7e6009a19395677d919b60360b697fef2e6f";
const AVALANCHE_MAIN_PRIVATE_KEY = "61406a3a0ff5688cc47cf346a10c7e6009a19395677d919b60360b697fef2e6f";

module.exports = {
  solidity: "0.7.3",
  networks: {
    avalancheTest: {
      url: 'https://api.avax-test.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: [`0x${AVALANCHE_TEST_PRIVATE_KEY}`]
    },
    avalancheMain: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
      gasPrice: 225000000000,
      chainId: 43114,
      accounts: [`0x${AVALANCHE_MAIN_PRIVATE_KEY}`]
    }
  }
};