// console.log(2 != 1);

// primitive data types 7types
// string, number, boolean, null, undefined, symbol, bigint 

// reference data type (non-primitive)
// Array, Objects, Function

// javascript is dynamically typed language

// const id = symbol('123');
// const anId = symbol('123');

// console.log(id === anId);

const heros = ["Iron man", "Captain America", "Thor"];



//*********************************************___________*****Memories****************************_____________________******************

// stack(primitive),  heap(non-primitive)

let myName = "Tausif ansari";
let anotherName = myName // copy
anotherName = "Tauhid ansari"

console.log(myName);
console.log(anotherName);


let user = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let user2 = user // Reference

user2.email = "tas@gmail.com"

console.log(user);
console.log(user2);

// Updation to original value