// Immediately Invoked function expression (IIFE)
// use for removing the pollution of global scope

(function chai() {
    console.log(`Db connected`);
})();  //          for ending a IIfE must use semi colon ;

((ip) => {
    console.log(`DB connected again! ip = ${ip}`);
}) (9999999999330);