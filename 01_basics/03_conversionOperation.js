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

// conversion of undefinde to Number
let undefindeValue = null
let undefindeInNumber = Number(undefindeValue)
console.log(typeof(undefindeInNumber))   // number
console.log(undefindeInNumber)  // 0 *noted: undefined converted to 0 (undefined --> 0).

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