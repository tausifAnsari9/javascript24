let a = 100        // block scope

if(true){  //block scope    
    let a = 200
    // console.log("inner: ", a);
}

// console.log(a);