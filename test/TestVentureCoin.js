var VentureCoinCrowdsale = artifacts.require('./VentureCoinCrowdsale.sol');
var VentureCoin = artifacts.require('./VentureCoin.sol');
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));

contract('VentureCoin:CheckBalance', function(accounts) {
  it("should return 0 balance", async function() {
    var coinbase = accounts[0];
    var VCNCrowdsale = await VentureCoinCrowdsale.deployed();
    var VCNAddress = await VCNCrowdsale.token();
    var ventureCoinInstance = VentureCoin.at(VCNAddress);
    var balance = await ventureCoinInstance.balanceOf.call(coinbase);
    console.log(`balance of ${coinbase}-->`, balance.toString(10));
    // var balances = await ventureCoinInstance.getBalances().call();
    // console.log('balances-->', balances);
  });

  // it("should return some VCN balance", async function() {
  //   var coinbase = accounts[0];
  //   var VCNCrowdsale = await VentureCoinCrowdsale.deployed();
  //   var VCNAddress = await VCNCrowdsale.token();
  //   var ventureCoinInstance = VentureCoin.at(VCNAddress);
  //   const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

  //   var amount = web3.utils.toWei(1, "ether");
  //   VCNCrowdsale.sendTransaction({ from: coinbase, value: amount});
  //   var balance = await ventureCoinInstance.balanceOf(coinbase);
  //   console.log('balance-->', balance.toString(10));
  // });
});