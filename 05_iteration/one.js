// for loop
const arr = [1, 2, 3, 4, 5]//, 6, 7, 8, 9, 10]
console.log("------------For loop------------");

for( let index = 0; index < arr.length; index ++) {
    const element = arr[index];
    console.log(element);    
}
// If an array is of size n, then arr[n] will print undefined

// while loop
let index = 0
console.log("------------While loop------------");

while(index <= 4) {
    console.log(`index is ${index}`);
    index++;
}

let score = 1
console.log("------------Do loop------------");

do {
    console.log(`score is ${score}`);
    // score ++;
}while(++score <= 4)