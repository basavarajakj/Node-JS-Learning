// const add = require("./add");
const addFn = require("./add");

console.log("Welcome to NodeJS!");

const sum = addFn(3, 4);
console.log(sum);
const sum2 = addFn(3, 2);
console.log(sum2);

require("./batman");
/* Module wrapper
 (function(exports, require, module, __filename, __dirname){
   const superHero = "Batman";
   console.log(superHero);
 })()
*/
require("./superman");
