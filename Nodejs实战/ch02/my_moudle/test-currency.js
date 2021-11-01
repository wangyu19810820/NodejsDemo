const currency = require('./currency');
const Currency2 = require('./currency2');

const canadianDollar = 0.91
const currency2 = new Currency2(canadianDollar);

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUS(50));
console.log(currency2.canadianToUS(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.USToCanadian(30));
console.log(currency2.USToCanadian(30));