account1 = web3.eth.accounts[1]
VentureCoinCrowdsale.deployed().then(inst => {crowdsale = inst})
crowdsale.token().then(addr => { tokenAddress = addr } )
ventureCoinInstance = VentureCoin.at(tokenAddress)
VentureCoinCrowdsale.deployed().then(inst => inst.sendTransaction({ from: account1, value: web3.toWei(5, "ether")}));
ventureCoinInstance.balanceOf(account1).then(balance => account1VCNBalance = balance.toString(10))
web3.fromWei(account1VCNBalance, "ether")



VentureCoinCrowdsale.deployed().then(inst => {crowdsale = inst})
crowdsale.token().then(addr => { console.log(addr) } )