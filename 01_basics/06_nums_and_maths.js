const score =  400
const balance = new Number(100.4533)
console.log(balance)       // output: [Number: 100]

console.log(balance.toString())     // 100
console.log(balance.toFixed(2))     // 100.4533
console.log(balance.toString().length)  // 8

console.log(balance.toPrecision(3))
