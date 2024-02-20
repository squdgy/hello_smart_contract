## hello_smart_contract

use Node 18 or below

`npm install`

install hardhat
```
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```

## Deploy 
local: `npx hardhat run --network localhost scripts/deploy.js`
sepolia: `npx hardhat run --network sepolia scripts/deploy.js`

## Instructions for testing from hardhat console on local network
```
npx hardhat console --network localhost 

const HelloWorld = await ethers.getContractFactory('HelloWorld');

const helloWorld2 = await HelloWorld.attach('0x5fbdb2315678afecb367f032d93f642f64180aa3'); // put contract address here

await helloWorld2.saveName('Orlando');

await helloWorld.doSomething('Howdy');
```


## Instructions for testing from hardhat console on Sepolia Network
```
npx hardhat console --network sepolia 

const HelloWorld = await ethers.getContractFactory('HelloWorld');

const helloWorld = await HelloWorld.attach('0xa0c4244ADA2EaAe76BdFf0d4B0dD68C9d78E0090');

await helloWorld.saveName('Orlando');

await helloWorld.doSomething('Yo');
```
