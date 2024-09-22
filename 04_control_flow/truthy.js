const userEmail = "badal@b.ai"  // ture, called trythy value

if(userEmail) { // we didn't compare it with something i.e if email is give this condition will be true otherwise false. 
    console.log("got user email")
} else {
    console.log("Don't have user eamil");
}

/* all these are consider as false, falsy value
= "" // empty string   
false   // flase
BigInt 0n   // Big Integer
null    //
-0      //
0       //
undefined   //
NaN     // Not a Number
*/
/*
all these are consider as true, truthy value
"anything with in these quotes will be consider as string  even a space"
''
[]  // empty list
{}  // empty object
function(){}

*/

//  checking the object is empty or not
const emptyObj = {}
if(Object.keys(emptyObj).length == 0) {
    console.log(`Object is empty`);    
}

// if(false == 0) return true
// if(false == '') return true
// if(0 == '') return true