const  accountId = 144553 // can't be update later
let accountEmail = "badal2pundir@gmail.com" //
var accountPassowrd = "12345"
accountCity = "Roorkee"
let accountState;  // undefined
// accountId = 2 // not allowed because it is a constant variable

/*
Prefer to not use var
because of issue in block scope and functional scope
*/
accountEmail = "pundirG@gmail.com"
var accountPassowrd = "1234566"
console.log(accountEmail)
// console.log([accountId, accountEmail, accountPassowrd, accountCity, accountState])
console.table([accountId, accountEmail, accountPassowrd, accountCity, accountState])