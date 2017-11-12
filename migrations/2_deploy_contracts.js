const VentureCoinCrowdsale = artifacts.require("./VentureCoinCrowdsale.sol")

module.exports = function(deployer, network, accounts) {
  // const startTime =  latestTime() + duration.days(3);  // + 3 days
  const startTime =  latestTime() + duration.seconds(120); // + immediately
  const endTime = startTime + duration.days(30); // + 30 days
  const rate = 8000;
  const wallet = accounts[0];
  const cappedInWei = web3.toWei(125000, "ether");
  
  // deploy it here
  deployer.deploy(VentureCoinCrowdsale, startTime, endTime, rate, wallet, cappedInWei)
  .then( async () => {
    const instance = await VentureCoinCrowdsale.deployed();
    const token = await instance.token.call();
    console.log('-----> VentureCoin(VCN) Address', token);
    
    console.log('-----> startTime:  ', startTime);
    console.log('-----> endTime:    ', endTime);
    console.log('-----> rate:       ', rate.toString());
    console.log('-----> wallet:     ', wallet);
    console.log('-----> cappedInWei:', cappedInWei);
  })
};

function latestTime() {
  return web3.eth.getBlock('latest').timestamp;
}

const duration = {
  seconds: function(val) { return val },
  minutes: function(val) { return val * this.seconds(60) },
  hours:   function(val) { return val * this.minutes(60) },
  days:    function(val) { return val * this.hours(24) },
  weeks:   function(val) { return val * this.days(7) },
  years:   function(val) { return val * this.days(365)} 
};
