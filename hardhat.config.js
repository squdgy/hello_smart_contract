require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

const ANKR_API_KEY = process.env.ANKR_API_KEY;
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://rpc.ankr.com/eth_sepolia/${ANKR_API_KEY}`,
      accounts: [`0x${SEPOLIA_PRIVATE_KEY}`]
    }
  },
};
