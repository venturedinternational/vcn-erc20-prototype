pragma solidity ^0.4.17;

import './zeppelin-solidity/contracts/token/MintableToken.sol';

contract VentureCoin is MintableToken {
  string public name = "VentureCoin Beta"; 
  string public symbol = "VCN";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 100000000 * (10 ** decimals);

  function VentureCoin(address inventorAddr) {
    totalSupply = INITIAL_SUPPLY;
    balances[inventorAddr] = INITIAL_SUPPLY;
  }
}
