// Dates

console.log("++++++++++++++++++++++++++++++++++++++")
const today = new Date();
console.log(today)
const birthday = new Date("December 17, 1995 03:24:00"); // DISCOURAGED: may not work in all runtimes
console.log(`birthday: ${birthday}`)
const birthday2 = new Date("1995-12-17T03:24:00"); // This is standardized and will work reliably
console.log(`birthday2: ${birthday2}`)
const birthday3 = new Date(1995, 11, 17); // the month is 0-indexed
console.log(`birthday3: ${birthday3}`)
const birthday4 = new Date(1995, 11, 17, 3, 24, 0);
console.log(`birthday4: ${birthday4}`)
const birthday5 = new Date(628021800000); // passing epoch timestamp
console.log(`birthday5: ${birthday5}`)
console.log("++++++++++++++++++++++++++++++++++++++")

// Formats of toString method return values
console.log("***************Formats of toString ************************")
// let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toJSON())
// console.log(typeof myDate)

const date = new Date("2020-05-12T23:50:21.817Z");
console.log(`toString(): ${date.toString()}`); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)
console.log(`toDateString: ${date.toDateString()}`); // Tue May 12 2020
console.log(`toTimeString: ${date.toTimeString()}`); // 18:50:21 GMT-0500 (Central Daylight Time)
console.log(`toPrimitive: ${date[Symbol.toPrimitive]("string")}`); // Tue May 12 2020 18:50:21 GMT-0500 (Central Daylight Time)

console.log(`toISOString: ${date.toISOString()}`); // 2020-05-12T23:50:21.817Z
console.log(`toJSON: ${date.toJSON()}`); // 2020-05-12T23:50:21.817Z

console.log(`toUTCString: ${date.toUTCString()}`); // Tue, 12 May 2020 23:50:21 GMT

console.log(`toLocaleString: ${date.toLocaleString()}`); // 5/12/2020, 6:50:21 PM
console.log(`toLocaleDateString: ${date.toLocaleDateString()}`); // 5/12/2020
console.log(`toLocaleTimeString: ${date.toLocaleTimeString()}`); // 6:50:21 PM
// more customization
// newDate.toLocaleString('default', {
//     weekday : "long"
// })

console.log("***************************************")

// To get Date, Month and Year or Time
console.log("==========To get Date, Month and Year ot Time============")
const new_date = new Date("2000-01-17T16:45:30");
const [month, day, year] = [
  new_date.getMonth(),
  new_date.getDate(),
  new_date.getFullYear(),
];
// [0, 17, 2000] as month are 0-indexed
console.log(`new_date: ${new_date.toLocaleDateString()}`)   //1/17/2000
const [hour, minutes, seconds] = [
  new_date.getHours(),
  new_date.getMinutes(),
  new_date.getSeconds(),
];
// [16, 45, 30]
console.log(`new_date: ${new_date.toLocaleString()}`)   //1/17/2000, 4:45:30 PM
console.log("=============================================================")
// let myCreatedDate = new Date(2020, 0, 23)   // months start from 0 in JS
let myCreatedDate = new Date(2020, 0, 23, 5, 5)   // months start from 0 in JS

console.log(myCreatedDate.toLocaleString())

let my_newDate = new Date("2024-06-23")    // YY-MM-DD
console.log(my_newDate.toLocaleDateString());

// Tim stamp
console.log("*********************")
let myTimeStamp = Date.now()
console.log(myTimeStamp)    //  milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch)
console.log(Math.floor(myTimeStamp / 1000))  // seconds
console.log(my_newDate.getTime())  //
console.log("**********************")

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());
