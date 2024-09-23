// three.js in video 29

// forof looop
const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);    
}

const greeting  ="Hello World!"
for(const greet of greeting) {
    console.log(`Each cahr is -${greet}-`);    
}

// Maps
console.log("-------------------map------------------");

const map = new Map()
map.set('IN', "India")
map.set('USA', "united state of america")
map.set('Fr', "france")
map.set('IN', "INDIA") // map doesn't store the duplicate value

console.log(map);

// iterating through map
console.log("----iterating map using forof loop------------------");

for(const pair of map) {
    // will print the key value pair as an array
    console.log(typeof pair + ": " + pair);
}
console.log("-------------------------------");

for(const [key, value] of map) {
    console.log(key, ":-", value);     // will print value of the key
}

console.log("-------------------Object------------------");
// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// will generate the error, we can't iterate objecgts in this way
// for( const [key, value] of myObject) {
//     console.log(key, ":-", value);
// }

const myObject = {
    js: "javaScript", 
    cpp: "C++", 
    rb: "ruby",
    swift: "swift by apple"
}

// forin loop
console.log("-----forin loop is use for object iteration ----");

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
    
    // if (Object.prototype.hasOwnProperty.call(myObject, key)) {
    //     const element = myObject[key];
        
    // }
}

console.log("----------forin loop for array----");

const programming = ["cpp", "c", "javascript", "java", "python"]
for(const key in programming) {
    console.log(programming[key]);
}



// for each loop
console.log("-----------for each loop---------");

const programmingLang = ["cpp", "c", "javascript", "java", "python"]
// call back function has no name
programmingLang.forEach(function (item) {
    console.log(item);    
})
console.log("--------------------------");

programming.forEach( (item) => {
    console.log(item);    
} );
console.log("----------passing function to the for each loop------------");

// passing function to for each loop
function printMe(item) {
    console.log(item);
}
programming.forEach(printMe) // giving the reference not calling that why we didn't use ()
console.log("--------------------------");

programming.forEach((item, index, arr) => {
    console.log(item, index, arr);
});

console.log("------------for each in array of objects---------------");

const myCoding = [
    {
        languageName: "javaScript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})