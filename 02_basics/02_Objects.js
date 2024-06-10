



const regularUser = {
    email: "pois@jjj.com",
    fullName:{
        userFullname: {
            FirstName:"Tausif",
            lastName: "Ansari"
        }
    }
}


console.log(regularUser.fullName.userFullname.lastName);

//-------------Combining two objects--------------------------

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
const obj3 = {5:"e", 6:"f"}
//const obj4 = Object.assign({},obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

const user = [
    {
        email: "t@u.com",
        id: 9999
    },
    {
        email: "t@u.com",
        id: 9999
    }, {
        email: "t@u.com",
        id: 9999
    }
]

//console.log(user[1].id);

console.log(regularUser);

console.log(Object.keys(regularUser));