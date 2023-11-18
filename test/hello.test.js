const { expect } = require("chai");

describe("HelloWorld", function() {
  it("Should return the new greeting once it's changed", async function() {
    const MyContract = await ethers.getContractFactory("HelloWorld");
    const myContract = await MyContract.deploy();
    await myContract.deployed();

    expect(await myContract.doSomething("Hello")).to.equal("Hello, World");
    await myContract.saveName("Mundo");
    expect(await myContract.doSomething("Hello")).to.equal("Hello, Mundo");
    expect(await myContract.doSomething("Hola")).to.equal("Hola, Mundo");
  });
});