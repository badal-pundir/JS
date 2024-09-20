//                     parameters
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result
}
//            argumnets
const resutl = addTwoNumbers(2, 4);
console.log("result:", resutl);

// -------------------------------------------------
function loginUserMessage(userfullname) {
    if(userfullname == undefined) {
    // if(!userfullname) {same thing}
        console.log("please enter a username");
        return;
    }
    return `${userfullname} just logged in`
}
console.log(loginUserMessage())
console.log(loginUserMessage("badal pundir"))

// ------- video 20 ----------------

// passing multiple arguments to the function.
// function calculateCartPrice(number1) { // only take first argumnet
function calculateCartPrice(...number1) { // rest operator, rest of the argumnet will be consider as 
    // element of the array name number1
    return number1 // return the array of the parameters
}

console.log(calculateCartPrice(200, 330, 500))

// passing object to the function
anyobject = {
    name: "badal",
    price: 433
}
function handleObject(anyobject) {
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
handleObject(anyobject)

// passig array to function

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));

