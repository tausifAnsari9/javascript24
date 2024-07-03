
// function sayMyName() {
//     console.log("t");
//     console.log("a");
//     console.log("u");
//     console.log("s");
//     console.log("i");
//     console.log("f");    
// }

// sayMyName()

function addTwoNumber(num1, num2) {
    let result = num1 + num2
    return result
}

const result = addTwoNumber(3, 4)

//console.log("result:",result);

function loginUserMessage(userName = "guest") {
    if (!userName) {
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in` 
}

//console.log(loginUserMessage()


function addCartprice(...num1){
    return num1
}
//console.log( typeof addCartprice(200, 300, 3000, 1200));

const user = {
    userName:"tausif",
    price: 199
}

function finalDetail(anyObject){
    return `username is ${anyObject.userName} and price is ${anyObject.price}`
}

// console.log(finalDetail(user))
// console.log(finalDetail({userName:"tausif", price: 399}));

const User = [200, 300, 3000]

function returnThirdValue(getArray){
    return getArray[2]
}

//console.log(returnThirdValue(User));

console.log(returnThirdValue([100,1000,100000]));