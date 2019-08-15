$(document).ready(function() {    
	var reportId = undefined;
    fileToValidate = undefined;
    facts = undefined;
    arcs = undefined;
    validated = undefined;
    
    var web3;
    var myContract;
    
    initWeb3();
    
    var sender1 = "0xf4Aa5a106188E003CBDced3456769EA03cA45cBD";
    var pass1 = "password";

    var sender = sender1;
    var pass = pass1;

    var contractAddress = "0x36197D5b3abf83BEFBDbEc28da8Bcf1Bf9D2AB2D";
    ///////////web3 areas

    $("#filterdiv").hide();

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
            getAllDataFromLocal(function(){
                getAllLogs(function(){
                    // showDataLocal();
                });
                drawGraph();
            });
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
    
    function getAllLogs(maincallback){
        var index = 0;
        $("#tbody2").html("");
        $("#tbody1").html("");

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
                            // checkHash : checkHash
                        })

                        ckValue = checkHashValue(index);
                        checkHash = ckValue.e > -1 ? "<span style='font-size:10px;'>&#9989;</span>" : "<span style='font-size:10px;'>&#10060;</span>";
                        ethDb[index].checkHash = checkHash;

                        $("#tbody1").append("<tr class='tb1rowtr'>"
                            +"<td width='20%'><div class='tb1row "+index+"'>"+result[0]+"</div></td>"
                            +"<td width='30%'>"+result[1]+"</td>"
                            // +"<td width='5%'>"+checkHash+"</td>"
                            +"</tr>");

                        var checkHash = ckValue.status ? "<span style='font-size:10px;'>&#9989;</span>" : "<span style='font-size:10px;'>&#10060;</span>";

                        $("#tbody2").append("<tr><td width='25%' id='tb2row "+ckValue.id+"'>"
                            +localDb[ckValue.id].hash1+"</td><td width='25%'>"
                            +localDb[ckValue.id].distance+"</td><td width='25%'>"
                            +localDb[ckValue.id].fuel+"</td><td width='25%'>"
                            +localDb[ckValue.id].vector+"</td><td width='25%'>"
                            +localDb[ckValue.id].oem+"</td><td width='25%'>"
                            +localDb[ckValue.id].vvt+"</td><td width='25%'>"
                            +checkHash+"</td></tr>");

                        index++;
                        if (index < result[2]) {
                            callback();
                        } else {
                            maincallback();
                        }
                    }else {
                        console.log("Stop");
                        maincallback();
                    }
            })
        }
        run();
    }

    var ethDb = [];
    var localDb = [];

    function getAllDataFromLocal(callback){
        $.get( "/getdatalocal", function( data ) {
            // console.log(data);
            
            localDb = data;

            // $("#tbody2").html("");

            // for (var e in localDb) {
            //     // console.log(data[e]);

                
            //     $("#tbody2").append("<tr><td width='25%' id='tb2row "+e+"'>"
            //                 +localDb[e].hash1+"</td><td width='25%'>"
            //                 +localDb[e].distance+"</td><td width='25%'>"
            //                 +localDb[e].fuel+"</td><td width='25%'>"
            //                 +localDb[e].vector+"</td><td width='25%'>"
            //                 +localDb[e].oem+"</td><td width='25%'>"
            //                 +localDb[e].vvt+"</td><td width='25%'>"
            //                 +""+"</td></tr>");
            // }

            // drawGraph();
            callback();
        });
    }

    function showDataLocal() {
        $("#tbody2").html("");

        for (var e in localDb) {
            // console.log(data[e]);
            var checkHash = localDb[e].checkHash ? "<span style='font-size:10px;'>&#9989;</span>" : "<span style='font-size:10px;'>&#10060;</span>";
            
            $("#tbody2").append("<tr><td width='25%' id='tb2row "+e+"'>"
                        +localDb[e].hash1+"</td><td width='25%'>"
                        +localDb[e].distance+"</td><td width='25%'>"
                        +localDb[e].fuel+"</td><td width='25%'>"
                        +localDb[e].vector+"</td><td width='25%'>"
                        +localDb[e].oem+"</td><td width='25%'>"
                        +localDb[e].vvt+"</td><td width='25%'>"
                        +checkHash+"</td></tr>");
        }
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


    ///////////////////////
    
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

    function checkHashValue(id) {
        for (var e in localDb) {
            if (ethDb[id].hash1 == localDb[e].hash1) {
                var has2Check = sha256(localDb[e].distance+localDb[e].fuel+localDb[e].oem+localDb[e].vvt+localDb[e].vector);
                if (has2Check == ethDb[id].hash2) {
                    // localDb[e].checkHash = true;
                    // ethDb[id].checkHash = true;
                    return {e : e, id : id, status : true};
                } else {
                    // localDb[e].checkHash = false;
                    // ethDb[id].checkHash = false;
                    return {e : e, id : id, status : false};
                }
                break;
            }
        }
        // localDb[e].checkHash = false;
        // ethDb[id].checkHash = false;
        return {e : -1, id : -1, status : false};
    }

    $('#tbody1').on('click','.tb1row',function(){
        var id = $(this).attr("class").split(" ")[1];
        var e = checkHashValue(id).e;
        if (e > -1) {
            $("#showInfor").html(
                "<h1>Data in Blockchain</h1><br>"+
                "<h3 id='hash1'>"+ethDb[id].hash1+"</h3><br>"+
                "<h3>"+ethDb[id].hash2+"</h3>"+
                "<h1>Data in Distributed Database</h1><br>"+
                "<h3><span>Distance</span><input type='text' id='distance' value='"+localDb[e].distance+"' /></h3>"+
                "<h3><span>Fuel</span><input type='text' id='fuel' value='"+localDb[e].fuel+"' /></h3>"+
                "<h3><span>Vector</span><input type='text' id='vector' value='"+localDb[e].vector+"' /></h3>"+
                "<h3><span>OEM</span><input type='text' id='oem' value='"+localDb[e].oem+"' /></h3>"+
                "<h3><span>VVT</span><input type='text' id='vvt' value='"+localDb[e].vvt+"' /></h3>"+
                "<h2>Hash checking is correct</h3><br>"+
                "<h3><input type='button' id='editDtrDB' value='Edit data in Distributed DB' /></h3>"+
                "");
        } else {
            $("#showInfor").html(
                "<h1>Data in Blockchain</h1><br>"+
                "<h2>"+ethDb[id].hash1+"</h2><br>"+
                "<h2>"+ethDb[id].hash2+"</h2>"+
                "<h1>Data in Distributed Database</h1><br>"+
                "<h2>Hash is incorrect</h2>"+
                "");
        }
    })

    $('body').on('click', '.country', function() {
        console.log($(this).attr("class"));
        countryCode = $(this).attr("class").split(" ")[1];
        console.log(countryCode);
        getProviders(countryCode);
    });


    $('body').on('click', '#filter', function() {
        $("#filterdiv").show();
    });

    $('body').on('click', '#unfilter', function() {
        $("#filterdiv").hide();
    });

    $('body').on('click', '#editDtrDB', function() {
        distance = $("#distance").val();
        fuel = $("#fuel").val();
        vector = $("#vector").val();
        oem = $("#oem").val();
        vvt = $("#vvt").val();
        hash1 = $("#hash1").html();

        $.ajax({
            url: "/editinlocal",
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
                console.log("Edit to local");
            }
        });
    })

    $('body').on('click', '#startfilter', function() {
        var vin = $("#VIN").val();
        // oem = $("#OEM").val();

        $("#tbody1").html("");
        $("#tbody2").html("");

        var nonce = 0;
        for (var e in ethDb) {
            hash1 = sha256(vin + nonce);
            if (ethDb[e].hash1 == hash1) {
                nonce++;
                var i = checkHashValue(e).e;
                checkHash = i > -1 ? "<span style='font-size:10px;'>&#9989;</span>" : "<span style='font-size:10px;'>&#10060;</span>";

                $("#tbody1").append("<tr class='tb1rowtr'>"
                    +"<td width='20%'><div class='tb1row "+e+"'>"+ethDb[e].hash1+"</div></td>"
                    +"<td width='30%'>"+ethDb[e].hash2+"</td>"
                    +"<td width='5%'>"+checkHash+"</td></tr>");
                
                $("#tbody2").append("<tr><td width='25%' id='tb2row "+i+"'>"
                            +localDb[i].hash1+"</td><td width='25%'>"
                            +localDb[i].distance+"</td><td width='25%'>"
                            +localDb[i].fuel+"</td><td width='25%'>"
                            +localDb[i].vector+"</td><td width='25%'>"
                            +localDb[i].oem+"</td><td width='25%'>"
                            +localDb[i].vvt+"</td></tr>");
            }
        }

    });
    ///////Draw IO

    function drawGraph() {
        var oemList = [];
        var dataPoints = [];
        for (var e in localDb) {
            var index = oemList.indexOf(localDb[e].oem);
            if (index > -1) {
                dataPoints[index] = {
                    oem : localDb[e].oem,
                    distance : parseFloat(dataPoints[index].distance) + parseFloat(localDb[e].distance),
                    fuel : parseFloat(dataPoints[index].fuel) + parseFloat(localDb[e].fuel),
                    num : dataPoints[index].num + 1
                };
            } else {
                oemList.push(localDb[e].oem);
                dataPoints.push({
                    oem : localDb[e].oem,
                    distance : parseFloat(localDb[e].distance),
                    fuel : parseFloat(localDb[e].fuel),
                    num : 1
                })
            }
        }

        for (var e in dataPoints) {
            dataPoints[e].x = Math.round(dataPoints[e].distance / dataPoints[e].num);
            dataPoints[e].y = Math.round(dataPoints[e].fuel / dataPoints[e].num);
        }

        // console.log(dataPoints);

        var chart = new CanvasJS.Chart("chartContainer", {
            animationEnabled: true,
            zoomEnabled: true,
            title:{
                text: "OEM analysis"
            },
            axisX: {
                title:"Avg Km"
                //minimum: 790,
                //maximum: 2260
            },
            axisY:{
                title: "Avg Fuel consumsion"
                //valueFormatString: "$#,##0k"
            },
            data: [{
                type: "scatter",
                toolTipContent: "<b>OEM: </b>{oem}<br/><b>Avg Fuel: </b>{y} litter<br/><b>Avg Km: </b>{x} km",
                dataPoints: dataPoints
            }]
        });
        chart.render();

    }

})