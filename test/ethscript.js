var fs = require('fs');
// exports.myDateTime = function () {
// 	return Date();
// };
var web3;
var myContract;

// initWeb3();

var sender1 = "0xf4aa5a106188e003cbdced3456769ea03ca45cbd";
var pass1 = "0x1c6816fb9663bb1e4622b643cb49ebd19fdc497e8eedbe92a25c1c6850a4ff6f";

var sender2 = "0x1ad62129d6f8850843fda0d4a4712dec2aa8492d";
var pass2 = "0x0c1d2435ce5af77e6f4c8260084f46a23bdc745a886e38d5f63ee3afad6eed22";

var sender3 = "0xacbf9eba9e03dc417e19c6a26cde0fd8515f5011";
var pass3 = "0xb84e5832949298d21b187d8d1e2fae95958019250a10d0727a98e2e9828819ca";

var sender = sender1;
var pass = pass1;

var contractAddress = "0xC49180DAEDa36862cf460887A97CCF58E50F3c4A";
///////////web3 areas
exports.initWeb3 = function(){
	var Web3 = require('web3');
	web3 = new Web3();

	//web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));
	web3 = new Web3(new Web3.providers.HttpProvider("http://0.0.0.0:8545"));

	//var abiContract = [ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "uint256" } ], "name": "companies", "outputs": [ { "name": "companyAddress", "type": "address", "value": "0xd231809c87ecd60f34da30c0127139f06c9100af" }, { "name": "companyName", "type": "string", "value": "cpTest" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "reportId", "type": "string" }, { "name": "validated", "type": "string" } ], "name": "updateValidateReport", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "companyIndex", "type": "uint256" }, { "name": "reportIndex", "type": "uint256" }, { "name": "arcIndex", "type": "uint256" }, { "name": "conceptFrom", "type": "string" }, { "name": "conceptTo", "type": "string" }, { "name": "weight", "type": "string" }, { "name": "calLinkBase", "type": "string" } ], "name": "updateArcByIndex", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "ownCompany", "outputs": [ { "name": "rs", "type": "uint256", "value": "1" }, { "name": "companyIndex", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "standard", "outputs": [ { "name": "", "type": "string", "value": "Token 0.1" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "companyAddress", "type": "address" } ], "name": "getCompany", "outputs": [ { "name": "cpAddress", "type": "address", "value": "0x0000000000000000000000000000000000000000" }, { "name": "companyName", "type": "string", "value": "" }, { "name": "reportSize", "type": "uint256", "value": "0" }, { "name": "companyIndex", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "reportId", "type": "string" }, { "name": "concept", "type": "string" }, { "name": "context", "type": "string" }, { "name": "value", "type": "string" }, { "name": "unit", "type": "string" }, { "name": "factgroup", "type": "string" } ], "name": "addFact", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "companyIndex", "type": "uint256" }, { "name": "reportIndex", "type": "uint256" } ], "name": "getReportByIndex", "outputs": [ { "name": "rpId", "type": "string", "value": "test1" }, { "name": "rpIndex", "type": "uint256", "value": "0" }, { "name": "date", "type": "string", "value": "Wed May 02 2018 10:52:59 GMT+0200 (CEST)" }, { "name": "validated", "type": "string", "value": "" }, { "name": "factSize", "type": "uint256", "value": "0" }, { "name": "arcSize", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "reportId", "type": "string" }, { "name": "date", "type": "string" } ], "name": "addReport", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [ { "name": "", "type": "address", "value": "0xd231809c87ecd60f34da30c0127139f06c9100af" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string", "value": "" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "", "type": "address" } ], "name": "frozenAccount", "outputs": [ { "name": "", "type": "bool", "value": false } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "companyIndex", "type": "uint256" }, { "name": "reportIndex", "type": "uint256" }, { "name": "arcIndex", "type": "uint256" } ], "name": "getArcByIndex", "outputs": [ { "name": "conceptFrom", "type": "string" }, { "name": "conceptTo", "type": "string" }, { "name": "weight", "type": "string" }, { "name": "calLinkBase", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "companyName", "type": "string" } ], "name": "registerNewCompany", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "reportId", "type": "string" } ], "name": "ownReport", "outputs": [ { "name": "rs", "type": "uint256", "value": "0" }, { "name": "companyIndex", "type": "uint256", "value": "0" }, { "name": "reportIndex", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "reportId", "type": "string" }, { "name": "conceptFrom", "type": "string" }, { "name": "conceptTo", "type": "string" }, { "name": "weight", "type": "string" }, { "name": "calLinkBase", "type": "string" } ], "name": "addArc", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [ { "name": "companyIndex", "type": "uint256" }, { "name": "reportIndex", "type": "uint256" }, { "name": "factIndex", "type": "uint256" }, { "name": "concept", "type": "string" }, { "name": "context", "type": "string" }, { "name": "value", "type": "string" }, { "name": "unit", "type": "string" }, { "name": "factgroup", "type": "string" } ], "name": "updateFactByIndex", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "companyIndex", "type": "uint256" }, { "name": "reportIndex", "type": "uint256" }, { "name": "factIndex", "type": "uint256" } ], "name": "getFactByIndex", "outputs": [ { "name": "concept", "type": "string" }, { "name": "context", "type": "string" }, { "name": "value", "type": "string" }, { "name": "unit", "type": "string" }, { "name": "factgroup", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "companyAddress", "type": "address" }, { "name": "reportId", "type": "string" } ], "name": "getReport", "outputs": [ { "name": "rpId", "type": "string", "value": "" }, { "name": "reportIndex", "type": "uint256", "value": "0" }, { "name": "date", "type": "string", "value": "" }, { "name": "validated", "type": "string", "value": "" }, { "name": "factSize", "type": "uint256", "value": "0" }, { "name": "arcSize", "type": "uint256", "value": "0" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "newOwner", "type": "address" } ], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [ { "name": "tokenName", "type": "string", "index": 0, "typeShort": "string", "bits": "", "displayName": "token Name", "template": "elements_input_string", "value": "XBRL 1.0" }, { "name": "tokenSymbol", "type": "string", "index": 1, "typeShort": "string", "bits": "", "displayName": "token Symbol", "template": "elements_input_string", "value": "$" } ], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [ { "indexed": false, "name": "target", "type": "address" }, { "indexed": false, "name": "frozen", "type": "bool" } ], "name": "FrozenAccount", "type": "event" } ];
    //contract = JSON.parse(fs.read('././build/contracts/ExampleSmartContract.json', 'utf8'));
    console.log("start here");
    // $.getJSON("./build/contracts/ExampleSmartContract.json", function(json) {
    //     console.log(json); // this will show the info it in firebug console
    // });
    console.log(web3.version.api);
    
    fs.readFile('./public/lib/EUComission.json', 'utf8', function (err, data) {
		if (err) {
	        console.log( "error" );
	        console.log(err);
		} else {
			obj = JSON.parse(data);
			console.log( "success" );
		    myContract = web3.eth.contract(obj.abi).at(contractAddress);
		    console.log("done init");
		}
	});
}
// exports.startscript=function(){
//     //Set up providers
//     var es = this;
//     es.addCountry("Vietnam","Vn",function(){
//         es.addCountry("Italian","It",function(){
//             es.addCountry("Austra","Aus",function(){
//                 //getCountries();
//                 console.log("Add countries");
//                 sender = sender1;
//                 pass = pass1;
//                 es.addProvider("AssIt_A","Bolzano","It",function(){
//                     es.addService("ServiceA_It",100,"0x46ec9e2EBbc17ab37B1c28F2eA26c78FecddE882"
//                         ,365,"{payable:0.8}","It",function(){
//                         sender = sender2;
//                         pass = pass2;    
//                         es.addProvider("InsAus_A","Wien","Aus",function(){
//                             es.addService("ServiceA_Aus",120,"0x93B749909f1ED6eD7DFF9d69Afa112659DC0C5f8"
//                                 ,365,"{payable:0.7}","Aus",function(){
//                                 sender = sender3;
//                                 pass = pass3;
//                                 es.addProvider("AssIt_B","Rome","It",function(){
//                                     es.addService("ServiceB_It",150,"0x24d267305079977d9C3273d71886607b25B5cb78"
//                                         ,365,"{payable:1.0}","It",function(){
//                                         sender = sender1; //contract owner
//                                         pass = pass1;
//                                         console.log("Done");
//                                         sendTokenToOthers();
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 }) 
//             })
//         })
//     })
//     function sendTokenToOthers() {
//         sender = sender1; //contract owner
//         pass = pass1;
//         es.mintToken(sender2,10000,function(){
//             es.mintToken(sender3,10000,function(){
//                 console.log("Everybody has 10000Tokens");
//                 purchasing();
//             })
//         })
//     }
//     function purchasing(){
//         //sender 1 buy sender 3 service
//         sender = sender1; //contract owner
//         pass = pass1;
//         es.buyInsurance("It",sender3,"0x24d267305079977d9C3273d71886607b25B5cb78", function(){
//             //sender 3 buy sender 2
//             sender = sender3; 
//             pass = pass3;
//             es.buyInsurance("Aus",sender2,"0x93B749909f1ED6eD7DFF9d69Afa112659DC0C5f8", function(){
//                 console.log("Doone purchasing");
//                 addServiceEquivalentHere();
//             })
//         })
//     }
//     function addServiceEquivalentHere(){
//         sender = sender1; //contract owner
//         pass = pass1;
//         es.addServiceEquivalent("It", sender3,"0x24d267305079977d9C3273d71886607b25B5cb78",
//                             "Aus", sender2,"0x93B749909f1ED6eD7DFF9d69Afa112659DC0C5f8","Italian vs Austria", function(){
//                                 console.log("Check equivalent");
//                                 es.checkServiceEquivalent("0x24d267305079977d9C3273d71886607b25B5cb78", "Aus");
//                                 es.checkServiceEquivalent("0x93B749909f1ED6eD7DFF9d69Afa112659DC0C5f8", "It");
//                             });
//     }
// }
exports.buyInsurance=function(countryCode,providerId,serviceId,callback){
    //buyInsurance(string memory from,
    //                string memory countryCode, address providerId, address serviceId)        console.log("mintToken");
    from = new Date().toLocaleString();
    var getData = myContract.buyInsurance.getData(from,countryCode,providerId,serviceId);
    web3.personal.unlockAccount(sender, pass)

    tx = web3.eth.sendTransaction({
        from: sender,
        to: contractAddress,
        data: getData,
        gas : 300000
    });
    console.log(tx);
    this.waitForTx(tx,callback);
}
exports.mintToken=function(addr,amount,callback){
    console.log("mintToken");
    //addCountry(string memory name, string memory code)
    //console.log(web3.eth.accounts);
    var getData = myContract.mintToken.getData(addr,amount);
    web3.personal.unlockAccount(sender, pass)

    tx = web3.eth.sendTransaction({
        from: sender,
        to: contractAddress,
        data: getData,
        gas : 300000
    });
    console.log(tx);
    this.waitForTx(tx,callback);
}
exports.getCountries = function(getResult){
    var rs = ("<p>List Countries here</p>");
    index = 0;
    console.log(myContract);
    function callback() {
        run()
    }
    function run() {
        myContract.getCountryByIndex(index,function (error, result) {
                if (!error){
                    console.log(index+">>>");
                    console.log(result[0]+ " "+result[1]+" "+result[2]);
                    rs+=("<div class='country "+result[1]+"'> Country:"+result[0]+" Code:"+result[1]+" Number of providers:"+result[2]+"</div>");
                    index++;
                    callback();
                }else {
                    console.log("Stop")
                    getResult(rs);
                }
        })
    }
    run();
}
exports.getProviders=function(countryCode,getResult){
    var rs = ("<p>List Providers of "+countryCode+" here</p>");
    index = 0;
    // console.log(myContract);
    function callback() {
        run()
    }
    function run() {
        myContract.getProviderByIndex(countryCode,index,function (error, result) {
                if (!error){
                    console.log(index+">>>");
                    console.log(result);
                    console.log(parseFloat(result[3]));
                    rs+=("<div class='provider "+countryCode
                        +" "+result[2]
                        +"'> Name:"+result[0]
                        +" Address:"+result[1]
                        +" Id:"+result[2]
                        +" Number of Services:"+result[3]
                        +"</div>");
                    index++;
                    callback();
                }else {
                    console.log("Stop");
                    getResult(rs);
                }
        })
    }
    run();
}

exports.getServices=function(countryCode, providerId,getResult){
    var rs = ("<p>List Services of "+providerId+" in "+countryCode+" here</p>");
    index = 0;
    // console.log(myContract);
    function callback() {
        run()
    }
    function run() {
        myContract.getServiceByIndex(countryCode,providerId,index,function (error, result) {
                if (!error){
                    console.log(index+">>>");
                    console.log(result);
                    console.log(parseFloat(result[3]));
                    rs+=("<div class='service "+countryCode
                        +" "+providerId
                        +" "+result[2]
                        +"'> Name:"+result[0]
                        +" Cost:"+result[1]
                        +" Id:"+result[2]
                        +" Duration:"+result[3]
                        +" Number of Insurance:"+result[4]
                        +"</div>");
                    index++;
                    callback();
                }else {
                    console.log("Stop")
                    getResult(rs);
                }
        })
    }
    run();
}

exports.getInsurances=function(countryCode, providerId,serviceId,getResult){
    var rs = "<p>List insurance of service "+serviceId+" in "+countryCode+" here</p>";
    index = 0;
    // console.log(myContract);
    function callback() {
        run()
    }
    function run() {
        myContract.getInsuranceByIndex(index, countryCode,providerId,serviceId,function (error, result) {
                if (!error){
                    console.log(index+">>>");
                    console.log(result);
                    rs +=("<div class='insurance "+countryCode
                        +" "+providerId
                        +" "+serviceId
                        +" "+result[0]
                        +"'> Id:"+result[0]
                        +" From:"+result[1]
                        +"</div>");
                    index++;
                    callback();
                }else {
                    console.log("Stop")
                    getResult(rs);
                }
        })
    }
    run();
}

exports.checkInsurances=function(countryCode, providerId,serviceId, insuranceId,getResult){
    
    myContract.checkInsurance(countryCode,providerId,serviceId,insuranceId,function (error, result) {
            if (!error){
                console.log(result);
                getResult(result);
            }else {
                console.log("Stop")
            }
    })
}

exports.addServiceEquivalent=function(countryCode1, providerId1,serviceId1,
                            countryCode2, providerId2,serviceId2,note, callback){
    //addServiceEquivalent(
    //string memory countryCode1, address providerId1, address serviceId1,
    //string memory countryCode2, address providerId2, address serviceId2,
    //string memory note)
    var getData = myContract.addServiceEquivalent.getData(countryCode1, providerId1,serviceId1,
                            countryCode2, providerId2,serviceId2,note);
    web3.personal.unlockAccount(sender, pass)

    tx = web3.eth.sendTransaction({
        from: sender,
        to: contractAddress,
        data: getData,
        gas : 300000
    });
    console.log(tx);
    this.waitForTx(tx,callback);
}

exports.checkServiceEquivalent=function(serviceId1, countryCode2,getResult) {
    myContract.checkServiceEquivalent(serviceId1, countryCode2,function (error, result) {
            if (!error){
                console.log(serviceId1+" "+countryCode2);
                console.log(result);
                getResult(result);
            }else {
                console.log("Stop")
            }
    })
}

exports.addProvider=function(name,addr,countryCode,callback){
    //addProvider(string memory name, string memory addr, string memory countryCode)
    console.log("addProvider");
    //addCountry(string memory name, string memory code)
    //console.log(web3.eth.accounts);
    var getData = myContract.addProvider.getData(name,addr,countryCode);
    web3.personal.unlockAccount(sender, pass)

    tx = web3.eth.sendTransaction({
        from: sender,
        to: contractAddress,
        data: getData,
        gas : 300000
    });
    console.log(tx);
    this.waitForTx(tx,callback);
}

exports.addService=function(name,cost,id,duration,policy,countryCode,callback){
    //addService(string memory name, uint cost, address id, uint duration, string memory policy, 
    //                string memory countryCode)
    console.log("addService");
    //addCountry(string memory name, string memory code)
    //console.log(web3.eth.accounts);
    var getData = myContract.addService.getData(name,cost,id,duration,policy,countryCode);
    web3.personal.unlockAccount(sender, pass)

    tx = web3.eth.sendTransaction({
        from: sender,
        to: contractAddress,
        data: getData,
        gas : 300000
    });
    console.log(tx);
    this.waitForTx(tx,callback);
}

exports.addCountry=function(name,code,callback){
    console.log("addCountry");
    //addCountry(string memory name, string memory code)
    //console.log(web3.eth.accounts);
    var getData = myContract.addCountry.getData(name,code);
    web3.personal.unlockAccount(sender, pass)

    tx = web3.eth.sendTransaction({
        from: sender,
        to: contractAddress,
        data: getData,
        gas : 300000
    });
    console.log(tx);
    this.waitForTx(tx,callback);
}
exports.waitForTx=function(txid, callback) {
	var es = this;
    var myTime = setInterval(function(){ 
        if(es.checkTx(txid)){
            clearInterval(myTime);  
            callback();
        }
    }, 1000);
}
exports.checkTx=function(txid) {
    console.log(web3.eth.getTransaction(txid));
    if(web3.eth.getTransaction(txid).blockNumber){
        return true;
    }
    return false;
}