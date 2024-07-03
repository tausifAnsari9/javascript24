let a = 100        // block scope

if(true){  //block scope    
    let a = 200
    // console.log("inner: ", a);
}

// console.log(a);

function one(){
    const userName = "tausif"
     function two(){
        const website = "youtube"
        console.log(userName);
     }
     // console.log(website);
    // two()
}

//one();


if (true) {
    const userName2 = "tauhid"
    if (userName2 === "tauhid") {
        const website = " youtube"
       // console.log(userName2 + website);
        
    }
   // console.log(website);
    
}
// console.log(userName2);



// ------------------------------ INTERSTING-----------------------------

// console.log(addOne(1));
function addOne(num) {
    return num + 1
}



 addTwo(2) // give error because of exicuting before declaration
const addTwo = function addTwo(num2) {
    return num2 + 2
}

