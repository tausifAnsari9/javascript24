const User = {
    userName: "tauhid",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.userName}, Welcome to the website`);
        console.log(this);
    }
}

// User.welcomeMessage()
// User.userName = "tausif"
// User.welcomeMessage()


console.log(this);


function chai() {
    console.log(this);
}

chai()

// "this" shows the current context

//--------------------------------------------------->>>

// const addTwo = (num1,num2) => {
//     return num1 + num2;             //explict return

// }

 // const addTwo = (num1 , num2) => num1 + num2  // implict return  // implict return
const addTwo = (num1 , num2) => ({name:"tausif"})

console.log(addTwo(2,3))