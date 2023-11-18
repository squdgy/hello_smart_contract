// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract HelloWorld {
    string public savedName = "World";

    function saveName(string calldata _name) public {
        console.log("Setting savedName from %s to %s", savedName, _name);
        savedName = _name;
    }

    function doSomething(string calldata _greeting) public view returns (string memory) {
        // Concatenate _name to the return value
        return string(abi.encodePacked(_greeting, ", ", savedName));
    }
}
