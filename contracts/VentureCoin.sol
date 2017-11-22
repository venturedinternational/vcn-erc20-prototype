pragma solidity ^0.4.17;

import './zeppelin-solidity/contracts/token/MintableToken.sol';
import './zeppelin-solidity/contracts/token/BurnableToken.sol';

contract VentureCoin is MintableToken, BurnableToken {
  string public name = "VentureCoin"; 
  string public symbol = "VCN";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 666000000 * (10 ** decimals);

  function VentureCoin(address _beneficierwallet) {
    totalSupply = INITIAL_SUPPLY;
    balances[_beneficierwallet] = INITIAL_SUPPLY;
  }
}
