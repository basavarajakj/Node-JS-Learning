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

// -----------------------------------

// MODULE CACHING

const superHero = require("./super-hero");
console.log(superHero.getName()); //Batman
superHero.setName("Superman");
console.log(superHero.getName()); //Superman

const newSuperHero = require("./super-hero");
console.log(newSuperHero.getName()); // superman

const SuHero = require("./super-hero");
const batMan = new SuHero("Batman")
console.log(batMan.getName());
