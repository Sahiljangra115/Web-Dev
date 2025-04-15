function stringToNumber(conversion) {
  let result = Number(conversion);
  if (isNaN(result)) {
    return "Not a number";
  }
  return result;
}

function flipBoolean(input) {
  let bol = Boolean(input);
  bol = !bol;
  return bol;
}

function whatAmI(input2) {
  return `I'm a ${typeof input2}!`;
}

function isItTruthy(input3) {
  if (Boolean(input3) == true) {
    return `It's truthy!`;
  } else {
    return `It's falsey!`;
  }
}

//math
// **** DO NOT CHANGE the values *****
const a = 18;
const b = 24;

// Addition of two values
function add() {
    let result1 = a + b;
    return result1; // Returns a number: 42
}

// Subtract small value from larger one
function subtract() {
    let result2 = b - a;
    return result2; // Returns a number: 6
}

function multiply() {
    let result3 = a * b;
    return result3; // Returns a number: 432
}

// Divide larger value by small
function divide() {
    return b / a; // Returns a number: 1.333...
}

// Increase value of a by 1
function increment() {
    // Note: This doesn't change the original const 'a'
    return a + 1; // Returns a number: 19
}

// Decrease value of b by 1
function decrement() {
    // Note: This doesn't change the original const 'b'
    return b - 1; // Returns a number: 23
}

// Divide larger value by small to find the reminder
function reminder() {
    return b % a; // Returns a number: 6
}

// Array
let arr = [[1, 2, 3, 4, 5],[5,5,5,5, 6]];
let someArr = []
function filterNumbers(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "number") return arr;
    }
}

function reverseArray(arr) {
    return arr.reverse();
}

function findMax(arr) {
    let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function removeDuplicates(arr) {
    return [... set(arr)]
}

function flattenArray(arr) {
  return arr.flat(Infinity);
}
console.log(flattenArray(arr))