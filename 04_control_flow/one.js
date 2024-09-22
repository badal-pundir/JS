const isUserLoogedIn = true

// <, >, <=, >=, ==, !=, ===, !==
if(2 == "2") {  // true
    console.log(`== executed`);    
}

if( 2 === "2") {    // false
    console.log(`=== executed`);
}

// short hand notation
const balance = 1000
if(balance > 500) console.log("test"), console.log("test 2"); // will execute fine, but not recommended at all

// logical operators
// AND STATEMENT '&&'
// OR STATEMENT '||'

// Nullish Coalescing Operator(??): null undefined

let val1;
val1 = 5 ?? 10  // null safty check. If first one is not valid then assing the 2nd value(10).
val2 = null ?? 10
// real use
val3 = undefined?? 15
console.log(val1);
console.log(val2);
console.log(val3);

// val = null ?? 10 ?? 15 first value will assing

// Terniary Operator
// condition ? true: false
const iceTeaPrice = 1000
iceTeaPrice >= 800 ? console.log("affordable") : console.log("not affordable");

