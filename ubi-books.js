// Lists all the books offered by UbiTok.io.
//

var BookERC20EthV0p9AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feePer10K","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV0p99AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV1AbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"},{"indexed":false,"name":"maxMatches","type":"uint256"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;

var BookERC20EthV1DecAbiArray =
[{"constant":true,"inputs":[{"name":"fromPrice","type":"uint16"}],"name":"walkBook","outputs":[{"name":"price","type":"uint16"},{"name":"depthBase","type":"uint256"},{"name":"orderCount","type":"uint256"},{"name":"blockNumber","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrder","outputs":[{"name":"client","type":"address"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountCntr","type":"uint256"}],"name":"withdrawCntr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getBookInfo","outputs":[{"name":"_bookType","type":"uint8"},{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_cntrMinInitialSize","type":"uint256"},{"name":"_feeDivisor","type":"uint256"},{"name":"_feeCollector","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"orderId","type":"uint128"}],"name":"getOrderState","outputs":[{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountBase","type":"uint256"}],"name":"transferBase","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_baseToken","type":"address"},{"name":"_rwrdToken","type":"address"},{"name":"_baseMinInitialSize","type":"uint256"},{"name":"_minPriceExponent","type":"int8"}],"name":"init","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amountRwrd","type":"uint256"}],"name":"transferRwrd","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"depositCntr","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromBase","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"}],"name":"getClientBalances","outputs":[{"name":"bookBalanceBase","type":"uint256"},{"name":"bookBalanceCntr","type":"uint256"},{"name":"bookBalanceRwrd","type":"uint256"},{"name":"approvedBalanceBase","type":"uint256"},{"name":"approvedBalanceRwrd","type":"uint256"},{"name":"ownBalanceBase","type":"uint256"},{"name":"ownBalanceRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newFeeCollector","type":"address"}],"name":"changeFeeCollector","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"transferFromRwrd","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"client","type":"address"},{"name":"maybeLastOrderIdReturned","type":"uint128"},{"name":"minClosedOrderIdCutoff","type":"uint128"}],"name":"walkClientOrders","outputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"status","type":"uint8"},{"name":"reasonCode","type":"uint8"},{"name":"executedBase","type":"uint256"},{"name":"executedCntr","type":"uint256"},{"name":"feesBaseOrCntr","type":"uint256"},{"name":"feesRwrd","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"price","type":"uint16"},{"name":"sizeBase","type":"uint256"},{"name":"terms","type":"uint8"},{"name":"maxMatches","type":"uint256"}],"name":"createOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"},{"name":"maxMatches","type":"uint256"}],"name":"continueOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"orderId","type":"uint128"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientPaymentEventType","type":"uint8"},{"indexed":false,"name":"balanceType","type":"uint8"},{"indexed":false,"name":"clientBalanceDelta","type":"int256"}],"name":"ClientPaymentEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"client","type":"address"},{"indexed":false,"name":"clientOrderEventType","type":"uint8"},{"indexed":false,"name":"orderId","type":"uint128"},{"indexed":false,"name":"maxMatches","type":"uint256"}],"name":"ClientOrderEvent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"eventTimestamp","type":"uint256"},{"indexed":true,"name":"orderId","type":"uint128"},{"indexed":false,"name":"marketOrderEventType","type":"uint8"},{"indexed":false,"name":"price","type":"uint16"},{"indexed":false,"name":"depthBase","type":"uint256"},{"indexed":false,"name":"tradeBase","type":"uint256"}],"name":"MarketOrderEvent","type":"event"}]
      ;
      
var niceERC20TokenAbiArray =
[{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}]
      ;

exports.networkInfo = {
  "demo": {
    networkId: "demo",
    name: "Simulated Demo Network",
    liveness: "DEMO"
  },
  "3": {
    networkId: "3",
    name: "Ropsten Test Network",
    liveness: "TEST"
  },
  "4": {
    networkId: "4",
    name: "Rinkeby Test Network",
    liveness: "TEST"
  },
  "42": {
    networkId: "42",
    name: "Kovan Test Network",
    liveness: "TEST"
  },
  "1": {
    networkId: "1",
    name: "Main Network",
    liveness: "LIVE"
  }
};

// TODO - danger - the decimals setting isn't actually respected by UI yet

exports.bookInfo = {
  "DEMO-ETH" : {
    networkId: "demo",
    bookAddress: "n/a",
    bookAbiArray: [],
    symbol: "DEMO-ETH",
    base: {
      tradableType: "ERC20",
      symbol: "DEMO",
      decimals: 18,
      name: "Demo Token",
      address: "n/a",
      abiArray: [],
      minInitialSize: "0.01"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Demo Ether",
      minInitialSize: "0.001"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok Reward Token",
      address: "n/a",
      abiArray: [],
    }
  },
  "TESTR-ETH" : {
    networkId: "3",
    bookAddress: "0x297ad00cf67aa1dcfc2c952b15502fa9e1910cee",
    bookAbiArray: BookERC20EthV0p9AbiArray,
    symbol: "TESTR-ETH",
    base: {
      tradableType: "ERC20",
      symbol: "TESTR",
      decimals: 18,
      name: "Test Token (Ropsten)",
      address: "0x678c4cf3f4a26d607d0a0032d72fdc3b1e3f71f4",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.01"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Ropsten)",
      minInitialSize: "0.001"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "Test UbiTok.io Reward Token",
      address: "0x5cfad634865157a5a988d743e6fcb4514e655460",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "TESTI-ETH" : {
    networkId: "4",
    bookAddress: "0xa4f552dab0fcb48dd8e3db45f239172592f94cd0",
    bookAbiArray: BookERC20EthV0p9AbiArray,
    symbol: "TESTI-ETH",
    base: {
      tradableType: "ERC20",
      symbol: "TESTI",
      decimals: 18,
      name: "Test Token (Rinkeby)",
      address: "0xce3fba94168812793f7082794302a089510b8711",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Rinkeby)",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "Test Ubi Reward Token (Rinkeby)",
      address: "0x76316acf8c8628c6df4730492e62a36ca00995d1",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "TEST8-ETH" : {
    networkId: "4",
    bookAddress: "0xfb6703a88e876c07e2dc537fb7c8886ac1055fba",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "TEST8-ETH",
    base: {
      tradableType: "ERC20",
      symbol: "TEST8",
      decimals: 8,
      name: "Test 8dp Token (Rinkeby)",
      address: "0xb1569932d1ff362f2d6931c5775faaa9ee4c6d4f",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Test Ether (Rinkeby)",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "Test Ubi Reward Token (Rinkeby)",
      address: "0x76316acf8c8628c6df4730492e62a36ca00995d1",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "OMG-ETH" : {
    networkId: "1",
    bookAddress: "0xf8d15960aa6Aaf5972DC54cF002951553906C7bd",
    bookAbiArray: BookERC20EthV1AbiArray,
    symbol: "OMG-ETH",
    bookStartBlock: 4402394,
    olderVersions: ["OMG-ETH.v01"],
    base: {
      tradableType: "ERC20",
      symbol: "OMG",
      decimals: 18,
      name: "OmiseGO",
      address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "OMG-ETH.v01" : {
    networkId: "1",
    bookAddress: "0x8216deae8744a0286c8c53d8f237b65f661644e3",
    bookAbiArray: BookERC20EthV0p99AbiArray,
    symbol: "OMG-ETH.v01",
    bookStartBlock: 4311371,
    newerVersion: "OMG-ETH",
    base: {
      tradableType: "ERC20",
      symbol: "OMG",
      decimals: 18,
      name: "OmiseGO",
      address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "0.1"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "eBTC-ETH" : {
    networkId: "1",
    bookAddress: "0x2cc6a8f865a71e69c9bc9931c486b6d1cbd90e15",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "eBTC-ETH",
    bookStartBlock: 4509772,
    base: {
      tradableType: "ERC20",
      symbol: "eBTC",
      decimals: 8,
      name: "eBTC",
      address: "0xeB7C20027172E5d143fB030d50f91Cece2D1485D",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0",
      notes: "This is the new eBTC token following the token swap on 2017-10-30."
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "SALT-ETH" : {
    networkId: "1",
    bookAddress: "0x2d492254d5bef8db7555ce3defe0cbf9efedd5fb",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "SALT-ETH",
    bookStartBlock: 4509772,
    base: {
      tradableType: "ERC20",
      symbol: "SALT",
      decimals: 8,
      name: "SALT",
      address: "0x4156D3342D5c385a87D264F90653733592000581",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  },
  "STORJ-ETH" : {
    networkId: "1",
    bookAddress: "0x2fa277f06d5caee292e870986cdc8a06499a632c",
    bookAbiArray: BookERC20EthV1DecAbiArray,
    symbol: "STORJ-ETH",
    bookStartBlock: 4509772,
    base: {
      tradableType: "ERC20",
      symbol: "STORJ",
      decimals: 8,
      name: "Storj",
      address: "0xb64ef51c888972c908cfacf59b47c1afbc0ab8ac",
      abiArray: niceERC20TokenAbiArray,
      minInitialSize: "1.0"
    },
    cntr: {
      tradableType: "Ether",
      symbol: "ETH",
      decimals: 18,
      name: "Ether",
      minInitialSize: "0.01"
    },
    rwrd: {
      tradableType: "ERC20",
      symbol: "UBI",
      decimals: 18,
      name: "UbiTok.io Reward Token",
      address: "0xec2ca0ef7cbbb49d5305f2f85dda24a9c5eda305",
      abiArray: niceERC20TokenAbiArray,
    }
  }
};
