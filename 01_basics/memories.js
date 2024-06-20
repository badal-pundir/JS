// Stack (primitive types) it gives the copy of the element stores in it.
// Heap (Non-primitive types) it gives the reference of the element stores in it.

let myName = "Badal"
let anothername = myName    // takes copy of myName variable.

anothername = "Cloudy"

console.log(myName)
console.log(anothername)

// non primitive type
userOne = {
    email: "user@google.com",
    uip : "user@ybl"
}

let userTwo = userOne   // points to the same memory location of the userOne object.

userTwo.email = "badalpundir@gooogle.com"
console.log(userOne.email)
console.log(userTwo.email)
