const score =  400
const balance = new Number(100.7533)
console.log(balance)       // output: [Number: 100]

console.log(balance.toString())     // 100
console.log(balance.toFixed(2))     // 100.4533
console.log(balance.toString().length)  // 8

console.log(balance.toPrecision(3)) // return only 3 digits

const anotherNumber = 1234.343
console.log(anotherNumber.toPrecision(2))

const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'))

console.log(Number.MAX_VALUE)
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_VALUE)

