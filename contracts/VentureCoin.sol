pragma solidity ^0.4.17;

import './zeppelin-solidity/contracts/token/MintableToken.sol';
import './zeppelin-solidity/contracts/token/BurnableToken.sol';

contract VentureCoin is MintableToken, BurnableToken {
  string public name = "VentureCoin Beta 2"; 
  string public symbol = "VCN2";
  uint public decimals = 18;
  uint public INITIAL_SUPPLY = 1000000000 * (10 ** decimals);

  function VentureCoin() {
    totalSupply = INITIAL_SUPPLY;
    address beneficier = address(0xD9dDC0A50F94d38514e02c70bcF00835B3Ba3F71);
    balances[beneficier] = INITIAL_SUPPLY;
  }
}
