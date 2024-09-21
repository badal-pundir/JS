// Immediatley Invoked Function Expressions (IIFE)

(function chai() { // named iife
    console.log(`DB CONNECTED`);    
})();
 
// or

( () => { // unnamed iife
    console.log("DB CONNECTED TWO")
})();

// or

( (name) => { // unnamed and parameterised
    console.log(`DB CONNECTED TWO, ${name}`)
})("badal");