# vcn-erc20-prototype
VentureCoin prototype, ERC20 compliance with openZeppelin.

## frameworks and versions
- node v8.5.0
- zeppelin-solidity v1.3.0
- solidity v0.4.13
- truffle v3.4.11

# Usage
## Step 1: download truffle and testrpc globally
```
npm i -g truffle ethereumjs-testrpc
```

## Step 2: run testrpc and unclock coinbase account
```
testrpc -u 0
```

## Step 3: New command line session and deploy contract to testrpc
```
npm run migrate
```
now the VCN ico contract is deployed to localhost:8545

## Interactive with this crowdsale with this [daap](http://github.com/venturedinternational/ico-daap)
