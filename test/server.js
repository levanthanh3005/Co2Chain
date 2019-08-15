const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
// const extras = require('./extras.js');
const MongoClient = require('mongodb').MongoClient;

const app = express()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.set('view engine', 'ejs')
var Web3 = require('web3');
web3 = new Web3();

//web3.setProvider(new web3.providers.HttpProvider('http://127.0.0.1:8545'));
web3 = new Web3(new Web3.providers.HttpProvider("http://0.0.0.0:8545"));//version : 0.20.3
const ethscript = require("./ethscript");
ethscript.initWeb3();


////////MongoDB
// var url = "mongodb://172.17.0.3:27017/mydb";
// console.log("Start Mongo");
// MongoClient.connect(url,  
//   function(err, db) {
//   if (err) {
//     console.log("Error");
//      throw err;
//    }
//   console.log("Database created!");
//   db.close();
// });

/*

docker run -it --rm -p 27017:27107 --name mongo mongo
docker run --link mongo:mongo -p 8081:8081 mongo-express

*/
///////End MongoDB



app.get('/', function (req, res) {
  // extras.initWeb3();
  // extras.readTotalBalance();
  res.render('index');
})


app.get('/checkServiceEquivalent', function(req,res){
  //localhost:3000/checkInsuarance?country=It&providerId=0xacbf9eba9e03dc417e19c6a26cde0fd8515f5011&serviceId=0x24d267305079977d9C3273d71886607b25B5cb78&insuranceId=0xf4aa5a106188e003cbdced3456769ea03ca45cbd
  console.log(req.body)
  // console.log(req.query)
  serviceId1 = req.body.serviceId1
  countryCode2 = req.body.countryCode2
  ethscript.checkServiceEquivalent(serviceId1, countryCode2,function(result){
    data = {
      response : {
        providerId2: result[0],
        serviceId2: result[1],
        note: result[2],
        isAcceptable: result[3],
        policy: result[4]
      }
    }
    res.status(200).send(data);
  })
})

app.get('/runscript', function (req, res) {
  // extras.initWeb3();
  // extras.readTotalBalance();
  res.render('RunScript');
})

app.get('/wallet', function (req, res) {
  // extras.initWeb3();
  // extras.readTotalBalance();
  res.render('Wallet');
})

app.get('/adddata', function (req, res) {
  // extras.initWeb3();
  // extras.readTotalBalance();
  res.render('addData');
})

app.get('/test', function (req, res) {
  res.render('test');
})

app.get('/getdatalocal', function (req, res) {
  res.send(localDb);
})

localDb = [];

app.post('/storeinlocal', function(req,res){
  res.send("done");
  // console.log(req.body);
  localDb.push(req.body);
  // console.log(localDb);
})

app.post('/editinlocal', function(req,res){
  res.send("done");
  for (var e in localDb) {
    if (localDb[e].hash1 == req.body.hash1) {
      localDb[e] = req.body;
    }
  }
})

app.listen(3005, function () {
  console.log('Example app listening on port 3005!')
})

//npm install web3@0.20.3 ejs express request

//ClEAN:
//docker rm -v $(docker ps --filter status=exited -q 2>/dev/null) 2>/dev/null
//docker rmi $(docker images --filter dangling=true -q 2>/dev/null) 2>/dev/null
//docker rmi $(docker images -q)
//docker rm $(docker ps -a -q)
//docker volume rm $(docker volume ls  -q)
////////////////////NOTE
//PROXY
//sometimes, proxy can not accept the route, but please rerun stack create... again 
//to update the service, it will update the proxy, the problem come from when we ping
//proxy, but the container has not run yet, the proxy will not accept it, but after that
//we update it again, it will accept because the container exits
//PROMOTHEUS
//Some example are quite clear now, just an issue that if we would like to store any
//promotheous indices, please use: 
//REQUEST_LATENCY = Histogram('http_server_resp_time', 'Request latency',['app_name', 'method', 'endpoint', 'http_status'])
//#funciton name = real funcition - "bucket", for example: http_server_resp_time = http_server_resp_time_bucket - bucket 