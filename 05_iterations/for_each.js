const coding = ["java", "c++", "c", "python"]
//coding.forEach(function (item){console.log(item);})
//coding.forEach((item) => {console.log(item)})     // arrow function 


// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


coding.forEach((item , index, arr) => {
 //   console.log(item , index, arr);

})


const myCoding = [
    {
        language:"Javascript",
        filename: "js"
    },
    {
        language:"java",
        filename: "java"
    },
    {
        language:"python",
        filename: "py"
    }
]

myCoding.forEach((item) =>{
    console.log(item.filename);
})