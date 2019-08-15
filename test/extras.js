const BigNumber = require('./libs/bignumber');
var Web3 = require('web3');
var web3 = new Web3('http://localhost:8545');

module.exports = {
	initWeb3: function(){
    	// web3 = new Web3();
	},
	readTotalBalance: function() {
	    logText = "";
	    totalAmount = new BigNumber(0);
	    for (var i in web3.eth.accounts) {
	        acc = web3.eth.accounts[i];
	        //			console.log(acc + " - "+web3.eth.getBalance(acc));
	        logText += i + " > " + acc + " - " + parseFloat(web3.fromWei(web3.eth.getBalance(acc), "ether").toString()).toFixed(2) + "\n";
	        $("#logText").val(logText);
	        console.log(acc + " - " + web3.fromWei(web3.eth.getBalance(acc), "ether").toString())
	        totalAmount = totalAmount.plus(new web3.BigNumber(web3.eth.getBalance(acc)));
	    }
	    console.log("Total:" + web3.fromWei(totalAmount.toString(), "ether").toString());
	    return web3.fromWei(totalAmount.toString(), "ether").toString();
	}

}