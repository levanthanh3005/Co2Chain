var fs = require('fs');

fs.readFile('struct.json', 'utf8', function(err, contents) {
    data = JSON.parse(contents);
    rs = generateStruct(data) +"\n" + generateAddFunction(data) +"\n" + generateGetFunction(data);
    fs.writeFile('generated.dat', rs, 'utf8', function(){
      console.log("done");
    }); 
});

generateStruct = function(data){
  rs = "";
  for (obj in data) {
    // console.log(">>"+obj);
    srs = "";
    sobj = data[obj];
    for (key in sobj["key"]) {
      // console.log(key);
      srs+=" "+key+" "+sobj["key"][key]+",\n";
    }
    // console.log("----");
    for (attr in sobj["attribute"]) {
      // console.log(attr);
      if(attr!="list") {
        srs+=" "+attr+" "+sobj["attribute"][attr]+",\n";
      } else {
        ls = sobj["attribute"][attr];
        for (lss in ls) {
          srs+=" "+lss+"[] "+ ls[lss].toLowerCase()+"Index,\n";
          nameList = ls[lss].toLowerCase();
          console.log(">>"+nameList[nameList.length-1]+" "+(nameList[nameList.length-1] == 'y'))
          if (nameList[nameList.length-1] == 'y') {
            nameList = nameList.substr(0, nameList.length-1) + "ie";
            // nameList[nameList.length-1] = 'i';
          }
          srs+=" mapping ("+lss+"=>"+ls[lss]+") "+nameList+"s,\n";
        }
      }
    }
    if (obj!="root") {
      srs="struct "+obj+" { \n "+srs;
      srs = srs.substr(0, srs.length-2);
      srs+="\n}\n";
    } 
    // console.log(srs);
    rs+=srs;
  }
  console.log(rs);
  return rs;
}

generateAddFunction = function(data){
  fns = "";
  for (obj in data) {
    // console.log(">>"+obj);
    if (obj == "root") {
      continue;
    }

    nameList = obj.toLowerCase();
    // console.log(">>"+nameList[nameList.length-1]+" "+(nameList[nameList.length-1] == 'y'))
    if (nameList[nameList.length-1] == 'y') {
      nameList = nameList.substr(0, nameList.length-1) + "ie";
      // nameList[nameList.length-1] = 'i';
    }
    nameList+="s";

    sfAdd = "";
    sobj = data[obj];

    sfAdd += "function add"+obj+"(";
    
    sfAddContent = "  //check exist here\n";

    for (key in sobj["key"]) {
      // console.log(key);
      if (key=="string") {
        sfAdd+=key+" memory "+sobj["key"][key]+",";
      } else {
        sfAdd+=key+" "+sobj["key"][key]+",";
      }
      sfAddContent+=" "+nameList+"["+sobj["key"][key]+"]="+sobj["key"][key]+";\n";
    }
    // console.log("----");
    for (attr in sobj["attribute"]) {
      // console.log(attr);
      if(attr!="list") {
        if (attr=="string") {
          sfAdd+=attr+" memory "+sobj["attribute"][attr]+",";
        } else {
          sfAdd+=attr+" "+sobj["attribute"][attr]+",";
        } 
        sfAddContent+=" "+nameList+"["+sobj["key"][key]+"]="+sobj["attribute"][attr]+";\n";     
      }
    }

    sfAddContent+="\n"+
                  " uint ssindex = "+obj.toLowerCase()+"Index.length;\n"+
                  " "+obj.toLowerCase()+"Index.length+=1;\n"+
                  " "+obj.toLowerCase()+"Index[ssindex] = "+sobj["key"][key]+";\n";
    sfAdd = sfAdd.substr(0, sfAdd.length-1);
    sfAdd+=") public {\n";
    sfAdd+=sfAddContent;
    sfAdd+="\n}\n";

    fns+=sfAdd;
  }
  console.log(fns);
  return fns;
}
 

generateGetFunction = function(data){
  fns = "";
  for (obj in data) {
    // console.log(">>"+obj);
    if (obj == "root") {
      continue;
    }

    nameList = obj.toLowerCase();
    // console.log(">>"+nameList[nameList.length-1]+" "+(nameList[nameList.length-1] == 'y'))
    if (nameList[nameList.length-1] == 'y') {
      nameList = nameList.substr(0, nameList.length-1) + "ie";
      // nameList[nameList.length-1] = 'i';
    }
    nameList+="s";

    sfGet = "";
    sobj = data[obj];

    sfGet += "function get"+obj+"ByIndex(";
    
    // for (key in sobj["key"]) {
    //   // console.log(key);
    //   if (key=="string") {
    //     sfGet+=key+" memory "+sobj["key"][key]+",";        
    //   } else {
    //     sfGet+=key+" "+sobj["key"][key]+",";
    //   }
    // }
    // // console.log("----");
    // sfGet = sfGet.substr(0, sfGet.length-1);
    sfGet+=" uint index) public view return (";

    sfGetContent=" require(index<"+obj.toLowerCase()+"Index.length);\n"
    sfGetContent+=" "+obj+" curr"+obj+" = "+nameList+"["+obj.toLowerCase()+"Index[index]];\n";
    sfGetContent+=" return (";

    for (attr in sobj["attribute"]) {
      // console.log(attr);
      if(attr!="list") {
        if (attr=="string") {
          sfGet+=attr+" memory "+sobj["attribute"][attr]+",";
        } else {
          sfGet+=attr+" "+sobj["attribute"][attr]+",";
        }
        sfGetContent+=" curr"+obj+"."+sobj["attribute"][attr]+",";
      }
    }
    sfGetContent = sfGetContent.substr(0, sfGetContent.length-1);
    sfGetContent+=");";

    sfGet = sfGet.substr(0, sfGet.length-1);
    sfGet+=") {\n";
    sfGet+=sfGetContent;
    sfGet+="\n}\n";
    // console.log(srs);
    fns+=sfGet;
  }
  console.log(fns);
  return fns;
}

console.log('after calling readFile');