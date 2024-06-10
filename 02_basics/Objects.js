// objects literals
const sym = Symbol("key1")
const User = {
    name: "tausif",
    "full name": "Tausif Ansari",
    location:"barakar",
    email: "tausif@gmail.com",
    [sym]: "key1"
}

//console.log(User);
// console.log(User.location);
// console.log(User["email"]);
// console.log(User["full name"]);
// console.log(User[sym]);
// console.log(User);
// User.email = "tausif@email.com"
// Object.freeze(User); //--------------------Freeze/////////////////
// console.log(User);
// User.name = "tauhid"
// console.log(User);

User.greet = function(){
    console.log(`hello user, ${this.name}`);
}

console.log(User.greet());