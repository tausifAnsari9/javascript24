// for of      (loop)

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  //  console.log(num);   
}

let str = "tausif"

for (const r of str) {
    // console.log(r);
}

// Maps

const code = new Map()

code.set('IN', 'India')
code.set('PAK', 'Pakistan')
code.set('CHN', 'China')


console.log(code);


for (const [key , value] of code) {         // for of loop on map
    console.log(key , value);
}



const myObj = {
    game1: 'nfs',
    game2: 'spiderman'
}

for (const [key, value] of myObj) {
    console.log(key , value);
}