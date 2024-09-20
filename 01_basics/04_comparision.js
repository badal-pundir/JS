// basic comparision
/**
 * console.log(2 > 1)   // true
 * 2 >= 1   // true
 * 2 < 1    // false
 * 2 == 1   // false
 * 2 != 1   // true
 * ther is no problem with these comarisions...
 */
// comparision on string, string will convert to number
console.log("2" > 1)    // true
console.log("02" > 1)   // true


// *problem arrises when we do comparision between null and undefinied.
// *AVOID THEM.
// comparision on null
console.log(null > 0)   // false
console.log(null == 0)  // false    called equality check
console.log(null >= 0)  // true
// The reason is that an equality check == and comparisions >, <, >= and <= work differently.
// Comparisions convert null to a numeber, treating it as 0.
// That's why 3rd null >=  is true and 1st null > 0 i false.

// comparision on undefinied
console.log(undefined > 0)   // false
console.log(undefined == 0)  // false   called equality check
console.log(undefined >= 0)  // false

// Strickly check
console.log("2" === 2)  // false