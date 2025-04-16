// WE can create an class with a better method known as --->  constructor function
// the constructor (function) works as an class
function Person(name, age) {
  //constructor functions have 1st letter of function name as Capital letter
  this.name = name;
  this.age = age;
}

function Car(maker, model) {
  this.maker = maker;
  this.model = model;
  this.engine = function () {
    return `this is a engine of ${this.model}`;
  };
}

let myCar = new Car("toyota", "fortuner"); // this will give you the output
let myNewcar =new Car("tata", "tiago"); // this will give output as undefined
// this is bcoz new word is used to acces the inside variables of the function

// but new is not sufficient we have to use (this) inside the function as (new) and (this) have internal connection that let them access the internal variables of the function

//console.log(myCar);
console.log(myNewcar.engine()); // this will go and execute engine function inside the car(constructor function) with object myNewcar  


// we can also add some property from outside the function

function Animal(species) {
  this.species = species 
  
}

Animal.prototype.sound = function () {// here we are accessing function's prototype and also adding some other properties to it
  return `${this.species} makes a sound`
}
let lion = new Animal("Lion")
console.log(lion.sound())

// we can also check for the condition like you should be using new keyword for accessing the constructor function and throw some errors 
function Drink(type) {
  if(!new.target){
    throw new Error("Drink must be called with new keyword")
  }
  this.type = type 
}

let tea = new Drink("Tea")
let coffee = Drink("coffee")
console.log(Drink)