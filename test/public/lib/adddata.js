$(document).ready(function() {    
	var reportId = undefined;
    fileToValidate = undefined;
    facts = undefined;
    arcs = undefined;
    validated = undefined;
    
    var web3;
    var myContract;
    
    initWeb3();
    initView();
    
    // console.log(sha256("1234"));

    var sender1 = "0xf4Aa5a106188E003CBDced3456769EA03cA45cBD";
    var pass1 = "password";

    var sender = sender1;
    var pass = pass1;

    var contractAddress = "0x36197D5b3abf83BEFBDbEc28da8Bcf1Bf9D2AB2D";
    ///////////web3 areas
    function initWeb3(){
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
        console.log(web3);
        var jqxhr = $.getJSON( "lib/EUComission.json", function(e) {
            console.log( "success" );
            contract = e.abi;
            myContract = web3.eth.contract(e.abi).at(contractAddress);
            console.log("done init");
            // addRandomLogs();
            getAllLogs();
        })
          .fail(function(e) {
            console.log( "error" );
            console.log(e);
          });

//    	sender = web3.eth.accounts[0];
//    	sender = "0x72b153C2F511B9De962A5a664209b08621A1C340";

    	//myContract = web3.eth.contract(abiContract).at(contractAddress);
        // addRandomLogs();
        // getAllLogs();
    }

    function initView() {
        var vin_chars = '0123456789.ABCDEFGH..JKLMN.P.R..STUVWXYZ'; 
        var vin_weights = '8765432X098765432';
        var vin_map = '0123456789X';

        var ran = (len, max) => Array(len).join().split(',').map(_ => ~~( Math.random() * (max||10) ));
        var vin_chk = (n,i) => transliterate(n) * vin_map.indexOf(vin_weights[i]);
        var transliterate = c => vin_chars.indexOf(c) % 10;

        var fake_vin = (vin,c) => (
            c = vin_chars.split('').filter(c => c!=='.'),
            vin = ran(17, c.length).map(n => c[n]), 
            vin[8] = vin_map[vin.map(vin_chk).reduce((a,b) => a+b) % 11],
            vin.join('')
        );



        $("#VIN").val(fake_vin());

        $("#Distance").val(randomRange(900,1100));
        $("#Fuel").val(randomRange(5,600));
        
        var lsOEM = ["Volv", "Toyot", 
                    "Fiet", "Merce", 
                     "BMI", "Auti", 
                     "Peuget", "Suzuk", 
                     "Volkswag", "Carlsber",
                     "Catroen", "Ausus"]

        $("#OEM").val(lsOEM[randomRange(0,11)]);

        $("#VVT").val("2007/46/EC");
        $("#Vector").val(Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1));

    }


    function randomWithoutVIN() {
        $("#Distance").val(randomRange(900,1100));
        $("#Fuel").val(randomRange(5,600));
        $("#Vector").val(Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1) + ";"+Math.floor((Math.random() * 100) + 1));
    }

    function randomRange(max, min) {
        return Math.floor(Math.random() * (+max - +min)) + +min;
    }
    
    var ethDb = [];

    function getAllLogs(){
        index = 0;
        console.log(myContract);
        function callback() {
            run()
        }
        function run() {
            myContract.getData(index,function (error, result) {
                    if (!error){
                        // console.log(index+">>>");
                        // console.log(result[0]+ " "+result[1]+ " "+ result[2]);
                        // $("#lsCountries").append("<div class='country "+result[1]+"'> Country:"+result[0]+" Code:"+result[1]+" Number of providers:"+result[2]+"</div>");
                        ethDb.push({
                            hash1 : result[0],
                            hash2 : result[1]
                        })

                        index++;
                        if (index < result[2]) {
                            callback();
                        }
                    }else {
                        console.log("Stop")
                    }
            })
        }
        run();
    }

    function addLogIntoBlockchain(hash1, hash2){
        console.log(myContract);
        var getData = myContract.logData.getData(hash1, hash2);
        web3.personal.unlockAccount(sender, pass)

        tx = web3.eth.sendTransaction({
            from: sender,
            to: contractAddress,
            data: getData,
            gas : 300000
        });
        console.log(tx);
        waitForTx(tx,function(){
            console.log("Done add addRandomLogs");
        });
    }

    function waitForTx(txid, callback) {
        var myTime = setInterval(function(){ 
            if(checkTx(txid)){
                clearInterval(myTime);  
                callback();
            }
        }, 1000);
    }
    function checkTx(txid) {
        console.log(web3.eth.getTransaction(txid));
        if(web3.eth.getTransaction(txid).blockNumber){
            return true;
        }
        return false;
    }

    function findNonce(vin){
        nonce = 0;
        for (e in ethDb) {
            hash1 = sha256(vin + nonce);
            if (ethDb[e].hash1 == hash1) {
                nonce++;
            }
        }
        return nonce;
    }


    function addIntoDistributedDb(hash1, distance, fuel, oem, vvt, vector) {
        $.ajax({
            url: "/storeinlocal",
            type: "post",
            data: {
                hash1 : hash1,
                distance : distance,
                fuel : fuel,
                oem : oem,
                vvt : vvt,
                vector : vector
            },
            success: function(d) {
                console.log("Added to local");
            }
        });
    }

    $('body').on('click', '#random2', function() {
        randomWithoutVIN();
    });

    nonce = 0;
    
    function sendCurData(){
        distance = $("#Distance").val();
        fuel = $("#Fuel").val();
        vector = $("#Vector").val();
        oem = $("#OEM").val();
        vvt = $("#VVT").val();
        vin = $("#VIN").val();

        nonce = findNonce(vin);
        
        hash1 = sha256(vin + nonce);
        hash2 = sha256(distance+fuel+oem+vvt+vector);
        console.log("Nonce:"+nonce);
        ethDb.push({
            hash1 : hash1,
            hash2 : hash2
        })
        addLogIntoBlockchain(hash1,hash2);
        addIntoDistributedDb(hash1, distance, fuel, oem, vvt, vector);
 
    }

    $('body').on('click', '#send', function() {
        sendCurData();
    });

    $('body').on('click', '#randsend', function() {
        for (var i = 0;i < 100;i++) {
            if (i % 5 ==0) {
                initView();
            } else {
                randomWithoutVIN();
            }
            sendCurData();
        }
    });
})