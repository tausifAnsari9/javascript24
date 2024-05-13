let num = 5.56789;
let n = num.toExponential();

console.log(n);

console.log(num.toFixed()); // round off num to significant figure

const debt = 10000000;
console.log(debt.toLocaleString("en-IN")); // to local string and indian currency


const otherNum = 12.45739887
console.log(otherNum.toPrecision(2));

//---------------------------MATHS--------------------------------------------


// console.log(Math.PI);

// console.log(Math.SQRT2);

// console.log(Math.sqrt(7.5));

// console.log(Math.pow(3, 2));

let minValue = 1;
let maxValue =  6;
console.log(Math.floor( Math.random() * (maxValue - minValue +1))+minValue);


