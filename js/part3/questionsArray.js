// function stringToNumber(conversion) {
//   let result = Number(conversion);
//   if (isNaN(result)) {
//     return "Not a number";
//   }
//   return result;
// }

// function flipBoolean(input) {
//   let bol = Boolean(input);
//   bol = !bol;
//   return bol;
// }

// function whatAmI(input2) {
//   return `I'm a ${typeof input2}!`;
// }

// function isItTruthy(input3) {
//   if (Boolean(input3) == true) {
//     return `It's truthy!`;
//   } else {
//     return `It's falsey!`;
//   }
// }

// //math
// // **** DO NOT CHANGE the values *****
// const a = 18;
// const b = 24;

// // Addition of two values
// function add() {
//     let result1 = a + b;
//     return result1; // Returns a number: 42
// }

// // Subtract small value from larger one
// function subtract() {
//     let result2 = b - a;
//     return result2; // Returns a number: 6
// }

// function multiply() {
//     let result3 = a * b;
//     return result3; // Returns a number: 432
// }

// // Divide larger value by small
// function divide() {
//     return b / a; // Returns a number: 1.333...
// }

// // Increase value of a by 1
// function increment() {
//     // Note: This doesn't change the original const 'a'
//     return a + 1; // Returns a number: 19
// }

// // Decrease value of b by 1
// function decrement() {
//     // Note: This doesn't change the original const 'b'
//     return b - 1; // Returns a number: 23
// }

// // Divide larger value by small to find the reminder
// function reminder() {
//     return b % a; // Returns a number: 6
// }

// // Array
// let arr = [1,2,1, 2, 3, 4, 5];
// let someArr = []
// function filterNumbers(arr) {
//     for (let j = 0; j < arr.length; j++) {
//         if (typeof arr[j] == "number") return arr;
//     }
// }

// function reverseArray(arr) {
//     return arr.reverse();
// }

// function findMax(arr) {
//     let max = arr[0];
//   for (let j = 0; j < arr.length; j++) {
//     if ( arr[j] > max) {
//       max = arr[j];
//     }
//   }
//   return max;
// }

// function removeDuplicates(array) {
//     return [...set(arr)]
// }
// console.log(removeDuplicates(arr))

// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }
// console.log(flattenArray(arr))


// -------------- LOOPS-----------------
//  let sum = 0;
function sumOfN(n) {
  let sum = 0;
  for (let j = 0; j <= n; j++) {
    sum += j
    // return sum;
  }
  return sum;
}
// console.log(sumOfN(5))

function printMultiplicationTable(n) {
  let table = []
  for (let j = 1; j < 11; j++) {
//  table[j-1] = (n*j)
table.push(`${n}*${j} = ${n*j} `)
  }
  return table.join("\n");
}
console.log(printMultiplicationTable(2))

function countVowels(str) {
  let count = 0
  for (let j = 0; j < str.length; j++) {
    if(element === (a ||i ||o ||u ||e )){
 count++;
    }
  }
  return count;
}
console.log(count)