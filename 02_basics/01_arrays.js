const myArr = [0, 1, 2, 3, true]
// array is resizable in js
console.log(myArr)

const myHeros = ["shaktiman", "naagraj"]
const myArray2 = new Array(1, 3, 5, 7)
console.log(myArray2)
myArr.push(23) // it push 23 at end and return the size of the array
console.log(myArr)

len = myArr.unshift(-1) // push -1 at the begninng of the array and return the size of the new array
console.log(len)
// arr.include(int a)
// arr.indexOf(int a)

const  newArr = myArr.join() // convert elements to string
console.log(myArr)
console.log(typeof myArr)
console.log(typeof newArr)

// slice, splice

console.log("A ", myArr)

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1, 3); // it will delete this portion from the original array included last index(3).
console.log("C ", myArr)
console.log(myn2)
