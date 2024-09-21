const user = {
    username : "badal", 
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); // this points to the current context
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "Sam"
// user.welcomeMessage()
console.log(this); // it will give empty object as ouput, because we are in  node environmnet
// but if we run this in browser we will get window() object i.e this will point the the window object in the browser

// function chai() {
//     let username = "badal";
//     console.log(this.username);    // undefined we can't user this inside the function
// }

// chai()

// const chai = function chai() {
//     let username = "badal";
//     console.log(this.username);    // undefined we can't user this inside the expression function
// }
// chai()

const chai = () => {
    let username = "badal";
    console.log(this);    // we can user "this" inside the arraow function
}

chai()

const addTwo = (num1, num2) => {
    return num1 + num2 // explict return
}

console.log(addTwo(3, 4));

// implicit return
const productTwo = (num1, num2) => num1 * num2
console.log(productTwo(3, 4))

const divideTwo = (num1, num2) => (num1 / num2);

// return object

const returnObj = (num1, num2) => ({usernmae:  `badal ${num1 + num2}`}) //()is must to return the object
console.log(returnObj(3, 4))