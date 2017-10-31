pragma solidity ^0.4.11;
import 'zeppelin-solidity/contracts/token/MintableToken.sol';

contract VentureCoin is MintableToken {
  string public name = "VentureCoin"; 
  string public symbol = "VCN";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 10000 * (10 ** decimals);

  function VentureCoin() {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
}