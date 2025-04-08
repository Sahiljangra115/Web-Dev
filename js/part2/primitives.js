/* 
    Primitive types in JavaScript 
    string, number, boolean, null, undefined, symbol, BigInt
*/

// we can find the type of a variable using the typeof operator
// // String
let name = "Alice";
let greet = "hello";
console.log(typeof name);
let greeting = "hello" + " " + name; // concatenation
console.log(greeting);

//ways to create a string
// 1. using single quotes
let username = "Sahil";
// 2. using double quotes
let myName = "Sahil kumar";
// 3. using backticks (template literals)
let myId = `Hello ${myName}`;

let Demo = `Hello ${2 * 2}`; // template literals allow us to embed expressions inside string literals

console.log(myId); // Hello Sahil kumar
console.log(Demo); // Hello Sahil kumar

let Sm1 = Symbol();
let Sm2 = Symbol();

console.log(sm1 === sm2); // false, because each symbol is unique

let sm = Symbol("Sahil");
let sm2 = Symbol("Sahil");
console.log(sm1 === sm2); // false, because each symbol is unique

let Balance = 1000;
let anotherBalance = new Number(1000); // object wrapper for number

console.log(typeof Balance); // number
console.log(typeof anotherBalance); // number, recommended to use primitive numbers

// // Number
const age = 30;

// Boolean
const isStudent = false;

// Null
const nothing = null;

// Undefined
let notDefined;

// Symbol
const uniqueId = Symbol("id");

// BigInt
const bigNumber = 9007199254740991n;

// console.log("Primitive Examples:");
// console.log("Name (string):", name);
// console.log("Age (number):", age);
// console.log("Is Student (boolean):", isStudent);
// console.log("Nothing (null):", nothing);
// console.log("Not Defined (undefined):", notDefined);
// console.log("Unique ID (symbol):", uniqueId.toString());
// console.log("Big Number (BigInt):", bigNumber);

/*
    Non-Primitive types in JavaScript
    Objects, Arrays, Functions
*/

// Object
const person = {
  name: "Bob",
  age: 25,
};

// Array
const numbers = [1, 2, 3, 4, 5];

// Function
function greet(user) {
  return `Hello, ${user.name}!`;
}

// console.log("\nNon-Primitive Examples:");
// console.log("Person (object):", person);
// console.log("Numbers (array):", numbers);
// console.log("Greeting (function call):", greet(person));
