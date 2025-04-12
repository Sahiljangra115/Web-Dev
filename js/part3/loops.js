let sum = 0;
// for (i = 0; i <= 5; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// countdown
let a = 0;
let count = [];
let i = 5;
while (i > 0) {
  count[a] = i;
  i--;
  a++;
}
console.log(count);

// 3rd challenge
let teaCollection = [];
do {
  tea = prompt("enter the favourite tea type");// prompt is not supportedd  by node js wee have to do this in browser
  if (tea !== "stop") {
    teaCollection.push(tea);
  }
} while (tea !== "stop");

4th challenge
let total = 0;
let j = 0;
do {
  total += j;
  j++;
} while (j < 4); // if it is true then the loop runs again else it goes outside the loop
console.log(total);

5th challenge

let array = [2, 4, 6];
let multiply = [];
for (let i = 0; i < array.length; i++) {
  result = array[i] * 2;
 // console.log(result)
  multiply.push(result);
 // multiply.push array[i]*2);
}
console.log(multiply);


// 6th challenge 
let cities = ["Paris", "Tokyo", "London"]
let newList = []

for (let i = (cities.length -1); i >= 0; i--) {
  newList.push(cities[i]);
}
console.log(newList)