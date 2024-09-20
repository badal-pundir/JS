// Stack (primitive types) it gives the copy of the element stores in it.
// Heap (Non-primitive types) it gives the reference of the element stores in it.

let myName = "Badal"
let anothername = myName    // takes copy of myName variable.

anothername = "Cloudy"

console.log(myName)
console.log(anothername)

// non primitive type, this will store in heap.
userOne = {
    email: "user@google.com",
    uip : "user@ybl"
}

let userTwo = userOne   // points to the same memory location of the userOne object.
// Before: 
console.log("user one's email: " + userOne.email)
// we are changing the email of user two
userTwo.email = "badalpundir@gooogle.com"
// user one's email will also get change coz both point to same location.
// After:
console.log("user one's email: " + userOne.email)
console.log("user two's email: " + userTwo.email)
