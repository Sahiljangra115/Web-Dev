let username = { firstname: "Sahil", lastname: "Kumar", isLoggedin: true }; // object literal

// we can make a object constant and then also able to change the value of the object
// but we cannot do that with primitive types
//this is beacause objects memory block is constant but the elements inside can be changed 
// its like if you have a car and we replace the engine of the car but the car is still the same
const user = { name: "Sahil", age: 30,
    "my Name": "Sahil Kumar", // we can use space in the key name but we have to use quotes for  we can have this type of datathat 
 };

user.name = "John"; // changing the value of object property/element with dot notation
user.age = 31; // changing the value of object property
console.log(user.name); // John ---> here we access the individual element of object using dot notation
console.log(user.age); // 31
console.log(user); // {name: "John", age: 31}
console.log(user["my Name"]); // Sahil Kumar ---> here we access the individual element of object using bracket notation
// the above is a method for accessing the element of object
console.log(username);
console.log(typeof username); // object, because objects are non-primitive types

//we can also use new keyword to create an object
let today = new Date(); // object constructor
console.log(today); // current date and time
// its an inbuilt object in js

//Arrays 

let myArray = [1, 2, 3, 4, 5, "a", "b", "c"]; // array literal

console.log(myArray[0]); // 1 --> result, 0 for accessing the first element of the array
// we have to be sure about the index of the element we are accessing in the array
let isValue = true;


// implicit type conversion
 console.log(1 + "1"); // 11, because 1 is converted to string and then concatenated with "2"
 console.log("1" + 1); // 11, because "2" is converted to number and then added with 1
 console.log(isValue + 1); // 2, because true is assumed to 1 by default and then added with 1
 // we can define the data type of variable explicitly.

 console.log(Number(isValue) + 1);// 2, because true is converted to number and then added with 1 
 console.log(String(isValue) + 1); // true1, because true is converted to string and then concatenated with 1


 let something = "2abc";
    console.log(Number(something)); // NaN, because "2abc" is not a number
    console.log(typeof Number(something)); // NaN, because "2abc" is not a number
