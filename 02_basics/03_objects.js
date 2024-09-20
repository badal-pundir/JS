// Singleton
// Object.create 


// object literals

const mySym = Symbol("key1")
const JsUser = {
    name: "Badal",
    "full name": "badal Pundir",
    [mySym] : "mykey1", // without [] mySym will consider as string not a symbol
    age: 15,
    location: "jaipur",
    email: "badal@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]);
// console.log(JsUser."full name");  will give error
console.log(JsUser["full name"]);

console.log(JsUser[mySym])

JsUser.email = "badal@google.com" // we can update values of the keys
// Object.freeze(JsUser) // we can restrict further change
JsUser.email = "badal@microsoft.com" // will not update the email in JsUser.
console.log(JsUser);

JsUser.greeting = function () {
    console.log("Hello JS user");
}

JsUser.greeting2JSuser = function () {
    console.log(`Hello ${JsUser.name} JS user`);
}
console.log(JsUser.greeting())
console.log(JsUser.greeting2JSuser());


