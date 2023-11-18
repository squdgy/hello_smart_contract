const ethers = require('ethers');

// Replace these with your own values
const providerUrl = `https://rpc.ankr.com/eth_sepolia/${process.env.ANKR_API_KEY}`;
const privateKey = process.env.SEPOLIA_PRIVATE_KEY;
const contractAddress = '0xa0c4244ADA2EaAe76BdFf0d4B0dD68C9d78E0090'; // Replace with your contract address

// The ABI for the contract
const contractAbi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "saveName",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "savedName",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_greeting",
          "type": "string"
        }
      ],
      "name": "doSomething",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

async function main() {
  // Initialize provider and signer
  const provider = new ethers.providers.JsonRpcProvider(providerUrl);
  const wallet = new ethers.Wallet(privateKey, provider);

  // Initialize contract instance
  const contract = new ethers.Contract(contractAddress, contractAbi, wallet);

  // Call the contract's doSomething function
  const result = await contract.doSomething("Howdy");

  console.log(result);
}

main().catch(console.error);