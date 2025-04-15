// Prototypes means extra property/functionality for any data type. everything in js is object
let computer = { cpu: 12 };
let lenovo = {
  screen: "HD",
  __proto__: computer, // this links up all the property of computer in lenovo
};
let tomharware = {};

console.log(computer);
console.log(`computer `, computer.__proto__); // this is used to access more info or prototype
console.log(`lenovo `, lenovo.__proto__); // this is used to access more info or prototype

// theres one more way to access the properties
Object.setPrototypeOf(lenovo, computer); // this is how you access prototypes of objects
console.log(`lenovo `, lenovo.cpu); // this is used hen you have to use some special property of that object

// __proto__  dumps all the instances/properties of an object at once you do not have to mention it explicitly

console.log(`lenovo `, Object.getPrototypeOf(lenovo)); // this is used when you have to use  all the property that lenovo has access to 
// as mentioned we first have to set property of computer with lenovo and then we can access by many methods
