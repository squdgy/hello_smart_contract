## hello_smart_contract

use Node 18 or below

`npm install`

install hardhat
```
npx hardhat
npm install --save-dev @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers
```


## Instructions for testing from hardhat console
```
npx hardhat console --network sepolia 

const HelloBCC = await ethers.getContractFactory('HelloWorld');

const helloBCC = await HelloBCC.attach('0xa0c4244ADA2EaAe76BdFf0d4B0dD68C9d78E0090');

await helloBCC.doSomething('Yo');
```
