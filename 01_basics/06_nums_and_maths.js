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

// ++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

console.log(Math);  // Object [Maths]
console.log(Math.abs(-4));
console.log(Math.round(4.6))    // 5
console.log(Math.ceil(4.6))     // 5
console.log(Math.floor(4.6))    // 4
console.log(Math.max(2, 3, 4, 6))
console.log(Math.random())     // [0, 1]
console.log((Math.random()*10) + 1)     // 1 to 9
console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)
