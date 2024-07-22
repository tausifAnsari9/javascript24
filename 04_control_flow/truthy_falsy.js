const userEmail = []

if (userEmail) {
    console.log("yes");
}else{
    console.log("no");
}

//  Falsy values:-
// false, 0, -0, big int 0n, null, undefined, NaN

// truthy values:-
// "0", 'false', " ", [], {}, function (){}

if(userEmail.length === 0){
    console.log("array");
}

const empObj = {}

if(Object.keys(empObj).length === 0)
    console.log(`obj is empty `);


// Nullish Coalescing Operator (??): null undefined 

let val1;

val1 = 5??10
val1 = null ?? 18
val1 = undefined ?? null ?? 15

console.log(val1);


// -------->  ternary operator

//  condition ? true : false

const iceTea = 80;

iceTea <= 50 ? console.log("buy") : console.log("don't buy");