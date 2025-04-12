// array has many attribute you have to read documents

// 1st challenge
let teaFlavor = ["Greentea", "bkack tea", "orange tea"];
const element = teaFlavor[0];
console.log(element);

//3rd challenge
let teaType = ["herbal", "white", "masala"];
teaType[2] = "jasmine";
teaType[3] = "orange";
teaType.push = "blue"; // it will always push at the end of the array
teaType.pop();
const remove = teaType.pop();
console.log(remove + "  this is .pop result");
teaType[teaType.length] = "brown"; // we are adding element at the end of the array if we donot  know the length of the array
console.log(teaType.length);
console.log(teaType);

// 6th challenge
let number = 5;
let phone = 2;
phone = number;
number = 10;
console.log(number);
console.log(phone);

let myNum = [2, 3, 5, 8, 6, 7, 9];
let change = myNum;
myNum.pop();
console.log(myNum);
console.log(change); // also be poped from the change arrray

// but this is not the case for the numbers
// this is known as SOFT COPY in javascript

// beacuse the both array point to the same memory reference

// HARDCOPY

let myNumber = [2, 3, 5, 8, 6, 7, 9];
let changed = myNumber.slice(); // there is one other way to do this
let changed1 = [...myNumber]; // spread operator
myNumber.pop();
console.log(myNumber);
console.log(changed);
console.log(changed1);

// 8th challenge --> merging the array

// take two arrays and put them in an thrid array
let europeanCities = ["paris", "rome"];
let asianCities = ["tokyo", "bangkok"];
let worldCities = europeanCities + asianCities;
let worldCities1 = [europeanCities, asianCities];

let worldCities2 = europeanCities.concat(asianCities);

console.log(worldCities);
console.log(worldCities1);
console.log(worldCities2);
console.log(typeof worldCities); // string
console.log(typeof worldCities1); // string
console.log(typeof worldCities2); // string

// 10th ---> checking presence of an element
let isRomethere = worldCities2.includes("rome");
console.log(isRomethere)