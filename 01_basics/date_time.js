const todayDate = new Date();

console.log(todayDate.getMonth());

console.log(todayDate.getDate());

console.log(todayDate.getDay());

console.log(todayDate.getFullYear());

let newDate = Date.now()
console.log(Math.floor(Date.now()/1000)); // time in seconds since 1st jan 1970