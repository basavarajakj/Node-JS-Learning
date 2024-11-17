// const sum = require("./math");

// console.log(sum(2, 3));

const math = require("./math");

// console.log(math.add(2,5));
// console.log(math.subtract(2,5));
  
const { add, subtract } = math; // obj destruct

console.log(add(2,5));
console.log(subtract(2,5));


