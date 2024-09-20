const tinder = new Object() // this is singleton object
const tinderUser = {} // this is non-singleton object

// console.log(tinder) empty object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    eamil : "some@gmail.com",
    fullname: {
        userfullname : {
            firstname: "badal",
            lastname: "pundir"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const onj3 = { obj1, obj2} it will create a new object of two objects as its values
const obj3 = Object.assign({}, obj1, obj2) // {} is target object withou it all the object 
// will assign to obj1 and then obj1 will assign to obj3,
// with the help of {empty object} all the source objects(onj1, obj2) inserted or assign into an empty object and 
//  then this object will assing to the obj3
// console.log("obj3:", obj3)

// alternative way
const obj4 = {...obj1, ...obj2}
// console.log("obj4:", obj4)

// making array of keys and values of the object

// console.log(Object.keys(tinderUser)) // array of keys of tinderUser object
// console.log(Object.values(tinderUser))  // array of values of the tinderUser object
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // checing if on object as specific property of not


// ---------- video 18 

const course = {
    coursename: "js in hindi",
    price: "999", 
    courseInstructor: "badal"
}
// destructring of object
// console.log(course.courseInstructor) we don't have to write this whole long thig every time
const {courseInstructor} = course // now we can you courseInstructor only to fetch value from the object
console.log(courseInstructor) 

// or we can rename this as well
const {courseInstructor: instr} = course // instr instead of full name
console.log(instr);


