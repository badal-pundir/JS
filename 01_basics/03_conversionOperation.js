let score = "33"    // string 

// two ways to check data type.
console.log(typeof score);  // print string
console.log(typeof(score)); // print string

let valueInNumber = Number(score)   // convert string to number
console.log(typeof(valueInNumber))  // number

// if string also contains alphabets
let stringScore = "33abc"
let stringInNumber = Number(stringScore)
console.log(typeof(stringInNumber)) // number
console.log(stringInNumber) // NaN

// conversion of ull to Number
let nullValue = null
let nullInNumber = Number(nullValue)
console.log(typeof(nullInNumber))   // number
console.log(nullInNumber)   // 0 *noted: null converted to 0 (null --> 0).

console.log("conversion of undefinde to Number") 
let undefindeValue = null
let undefindeInNumber = Number(undefindeValue)
console.log(typeof(undefindeInNumber))   // number
console.log("undefinedValue: " + undefindeValue)
console.log("undefinedNumber: " + undefindeInNumber)  // 0 *noted: undefined converted to 0 (undefined --> 0).

/* to Number
*   "33" --> 33
*   "33ab" --> NaN
*   true --> 1, false --> 0
*   null --> 0
*   undefined --> 0
*/

/*  to Boolean
 *  1 --> true
 *  0 --> false
 *  "" --> false (empty string -> false)
 *  "any_string" --> true (string -> true)
*/

/*  to String
 *  33 -->"33" (numer to string) * 
 */

// ********************************* OPERATIONS *************************************
// video 07
let value = 3
let negValue = -value
// console.log(negValue) // -3

// Basic operation
/*
console.log(2 + 2)  // 4
console.log(2 - 2)  // 0
console.log(2 * 2)  // 4
console.log(2**2)   // 4
console.log(2 / 2)  // 1
console.log(2 % 2)  // 0
*/

let str1 = "hello,"
let str2 = " badal!"

let str3 = str1 + str2
console.log(str3)


console.log("1" + 2)    // 12
console.log(1 + "2")    // 12
console.log("1" + 2 + 2)    // 122
console.log(1 + 2 + "2")    // 32

console.log(true);  // true
console.log(+true); // 1
// console.log(true+)   // error
console.log(+"");   // 0

// it will work it is not clean so don't do this.
let num1, num2, num3
// num1 = num2 = num3 = 2 + 2  

// prefix/ postfix increment/decrement
let gameCounter = 100
console.log(gameCounter++)  
console.log(++gameCounter)