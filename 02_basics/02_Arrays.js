const Marvel_heros = ["Iron man", "Captain America", "Thor", "Black Widow", "Hulk", "Hawkeye"] 
const dc_heros = ["Superman", "Batman", "Flash"]

// Marvel_heros.push(dc_heros);   // ------------------

// console.log(Marvel_heros)

const all_heros = Marvel_heros.concat(dc_heros); 

//console.log(all_heros);

const all_newHeros = [...Marvel_heros, ...dc_heros]
console.log(all_newHeros);


const another_arr = [1,2,3,[4,5,6],7,[8,9,[10,11]]]

const simpl_arr = another_arr.flat(2)
console.log(simpl_arr);

console.log(Array.isArray(simpl_arr));

console.log(Array.from("23"));

console.log(Array.from({name: "tausif"})); // when the argument  is object it returns empty array




let name = "tausif"
let score = 78
let total_score = 100

console.log(Array.of(name, score, total_score));