const Obj = {
    js: "Javascript",
    cpp:"c++",
    rb:"ruby"
}

for (const key in Obj) {
 //  console.log(Obj[key]);  // for values
  // console.log(key);  // for keys
 //  console.log(key +":- " + Obj[key]);  // for values & keys
}

const program = ['java', 'cpp', 'python', 'ruby']

for (const key in program) {
  // console.log(program[key]);
}



const code = new Map()

code.set('IN', 'India')
code.set('PAK', 'Pakistan')
code.set('CHN', 'China')

for (const key in code) {
 // console.log(key); 
}


