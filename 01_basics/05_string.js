const name = "badalPundir"
const repoCount = 50

console.log(name + repoCount + " value")
// 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)


// another way todeclear a string
// by using string constructor

const lastName = new String('Pundir') // string is a object here not a array which stores key value pair

console.log(lastName.__proto__); // empty object
// length
console.log(lastName.length)        // not length()
// to upperCase
console.log(lastName.toUpperCase()) // notice ()

console.log(lastName.charAt(2))     // n
console.log(lastName.indexOf('n'))  //2

const completeName ="Badal-Pundir"
// let firstIndex = completeName.indexOf('P')
// let lastIndex = completeName.indexOf('r')
let splitIndex = completeName.indexOf('-')
const firstName = completeName.substring(0, splitIndex)
let name_len_ = completeName.length
// sub-string
const surName = completeName.substring(splitIndex + 1, name_len_ )
console.log(`my name id ${firstName} ${surName}`)

const reverseName = completeName.slice(-3, 4)   // slice can take -ve value but substring() not.
console.log(reverseName)

const spaceSting = "   newString "
console.log(spaceSting.trim())  // remove white spaces

const url = "https://cloudy.com/badal%20pundir"
console.log(url.replace('%20', '-'))

console.log(url.includes('pundir'))     // true

// Split--------
/**
 * split(separator)
 * split(separator, limit)
 * 
 * SEPARATOR- The pattern describing where each split should occur. 
 * Can be undefined, a string, or an object with a Symbol.split method
 * 
 * LIMIT- A non-negative integer specifying a limit on the number of 
 * substrings to be included in the array. If provided, splits the 
 * string at each occurrence of the specified separator, but stops when 
 * limit entries have been placed in the array. Any leftover text is not 
 * included in the array at all.
 * -->The array may contain fewer entries than limit if the end of the string 
 *    is reached before the limit is reached.
 * -->If limit is 0, [] is returned.
 */

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words);
// Expected output: "fox"

const firstFiveWords = str.split(' ', 5);
console.log(firstFiveWords);

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// Expected output: Array ["The quick brown fox jumps over the lazy dog."]
