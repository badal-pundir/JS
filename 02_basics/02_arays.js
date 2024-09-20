const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) it update the original array
console.log(marvel_heros)

const allHeros = marvel_heros.concat(dc_heros) // it reuturn a new array rather than modifying the original array
console.log(allHeros)

const all_new_heros = [...marvel_heros, ...dc_heros] // spread operator
console.log(all_new_heros)

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("badal"))
console.log(Array.from("badal")); // make it array [ 'b', 'a', 'd', 'a', 'l' ]
console.log(Array.from({name: "badal"})) // empty array, no keys found

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // make array from these values, [ 100, 200, 300 ]


// Array.concat()
// Array.flat()
// Array.from()
// Array.of(val1, val2, val3, val4, ...)
// 
