let a = 200
if(true) {
    let a = 20 // this 'a' is not same 'a' at outer
    const b = 20
    // var c = 30  // or c = 30
    console.log("inner: ", a);
    
}

console.log("outer a: ", a);
// console.log(b);
// console.log(c);

function one() {
    const username = "badal"
    
    function two() {
        const website = "youTube"; //
        console.log(username);
        
    }
    // console.log(website); // two() is yet to be called
    two();
    // console.log(website) // even after calling tow() webiste is not accessible
}

one()


if(true) {
    const username = "badal"
    if(username == "badal") {
        const website = "YouTube "
        console.log(username + website);
    }
    // console.log(website);
}

// console.log(username); // not accessible

function addOne(num) {
    return num + 1;
}

console.log(addOne(5))

const addTwo = function(num) { // also called expression
    return num + 2
}

console.log(addTwo(5))

