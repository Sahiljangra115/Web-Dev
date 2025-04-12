// 1st / 10
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTea = [];
for (let i = 0; i < tea.length; i++) {
  const element = tea[i];
  // selectedTea.push(tea[i]);
  // if(tea[i] === "chai") break ;
  if (element != "chai") {
    selectedTea.push(element);
  } else {
    break;
  }
}
console.log(selectedTea); 

// 2nd/10
let cities = ["London", "NewYork", "Paris", "Berlin"];
let Visited = [];

for (let j = 0; j < cities.length; j++) {
  // if(cities[i]=== "Paris"){ continue;}
  Visited.push(cities[j]);
  if (cities[j] === "Paris") {
    Visited.pop();
  }
}
console.log(Visited);

// 3rd / 10
let number = [1, 2, 3, 4, 5];
let smallNumber = [];
for (const num of number) {
  // num is like i for index
  if (num === 4) break;
  smallNumber.push(num);
}
console.log(smallNumber);

// 4th / 10
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Berlin: 3500000,
  Paris: 2200000,
};
let cityPopulations = {};
for (const cities in citiesPopulation) { //cities is like [i] in array
  // in objects the elements can be accessed with direct memory access we donot need to go through each element and it itself donot follow  the order
  //console.log(citiesPopulation[cities])

  if (cities === "Berlin") break;

  // we cannot directly push we need to create a new object which is cityPopulations
  // key = value
  cityPopulations[cities] = citiesPopulation[cities];
}
console.log(cityPopulations);
