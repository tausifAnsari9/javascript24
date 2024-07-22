// if

const isUserLoggedIn = true

if(isUserLoggedIn){
     console.log(`user is active`);
}else{
     console.log(`user is offline!`)
}
// Comparison operators
// >, <, >=, <=, ==, =, !=, ===

//if(true) console.log("test");


const UserLoggedIn = true
const debitCard = false
const Account = false

if (UserLoggedIn && debitCard && Account) {
     console.log(`allowed to purchase`);
}
if (UserLoggedIn || debitCard || Account) {
     console.log(`allowed to purchase`);
}

//----------->>  SWITCH
const month = 3;
switch (month) {
     case 1: console.log("jan");
          
          break;
     case 2: console.log("feb");
          
          break;
     case 3: console.log("mar");
          
          break;

     default:console.log(Error404);
          break;
}