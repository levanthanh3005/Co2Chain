const ConvertLib = artifacts.require("ConvertLib");
const EUComission = artifacts.require("EUComission");

module.exports = function(deployer) {
  deployer.deploy(EUComission);
};
