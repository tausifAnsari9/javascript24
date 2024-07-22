// // For loop

// for (let i = 0; i <= 10; i++) {
//     const element = i;
//     if(element == 6){
//       //  console.log(`half completed`);
//     }
//    // console.log(element);
    
// }


// for (let i = 1; i <= 10; i++) {
//   //  console.log(`outer loop: ${i}`);
//     for(let j = 1; j <= 10; j++){
//        // console.log(`${i}*${j}= ${i*j}`);
//     }
// }

// const myArr = ["flash", "batman", "spiderman", "ironman"]

// for (let index = 3; index < myArr.length; index) {
//     const element = myArr[index];
//   //  console.log(element);
// }

for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`5 Detected`);
        break
    }
    console.log(`i is ${i}`)

}
for (let i = 1; i <= 20; i++) {
    if(i == 5){
        console.log(`5 Detected`);
        continue
    }
    console.log(`i is ${i}`)

}
