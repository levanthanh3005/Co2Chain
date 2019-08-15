pragma solidity ^0.5.0;


// This is just a simple example of a coin-like contract.
// It is not standards compatible and cannot be expected to talk to other
// coin/token contracts. If you want to create a standards-compliant
// token, see: https://github.com/ConsenSys/Tokens. Cheers!

contract EUComission {

	struct hashLog {
       string hashVIN;
       string hashData;
	}

	hashLog[] logs;

	function logData(string memory hashVIN, string memory hashData) public {
		uint index = logs.length;
		logs.length+=1;
		logs[index].hashVIN = hashVIN;
		logs[index].hashData = hashData;
	}

	function getData(uint index) public view returns (string memory hashVIN, string memory hashData, uint length) {
		return (logs[index].hashVIN, logs[index].hashData, logs.length);
	}
}
