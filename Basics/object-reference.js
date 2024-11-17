const obj1 = {
  name: "Bassu"
};

const obj2 = obj1;
obj2.name = "newName";

console.log(obj1); // { name: 'newName' }

let obj3 = obj1;
obj3 = {
  name: "Sham"
}
console.log(obj1); // { name: 'newName' }
