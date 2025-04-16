let car = {
  company: "BMW",
  model: "M8 Cmopetition",
  year: "2025",
  start: function () {
    return `${this.company} is the king of Drifting ${this.model} is the king of Speed`;
  },
};
console.log(car.start());

// The below code needs to be reviewwed once again

// we can add any prototype to a variable just like below
Array.prototype.myname = function () {
  // this will add a myname function property in the array
  return `${this} is the array`;
};

let myArray = [1, 2, 3, 4, 5, 6];
console.log(myArray.myname());

// when we add a function inside the class it's called an method
// methods do not require function keyword

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this} is the checking ${this.model}`;
  }
}

// we can access or borrow the methods and variables of a class by using (extend) keyword

// ---------  INHERITANCE   ------
class Car extends Vehicle {
  // here car is a new class and it also borrowing data from class Vehicle
  drive() {
    return `${this.make} is a variable of class Vehicle`;
  }
}

Car.prototype.sahil = function () {
  // we can also add a property or prototype to a class
  return `this is me sahil`;
};

let myCar = new Car("toyota", "fortuner");
console.log(myCar.drive());
// console.log(myCar.make());  // we cannot directly access the variable we have to make a function or say method of it in that class to access that variable
console.log(myCar.start()); // these keyword or function after mycar shows that Car class has access to the methods of class Vehicle
console.log(myCar.sahil());

// --------------- ENCAPSULATION -----------------

// lets suppose you have an bank account and you donot want to let people access the balance of it
class Balance {
  #balance = 0; // # is used to encapsulate the data and can directly be accessed in side the class

  deposit(amount) {
    this.#balance += amount;
    return ` $ ${this.#balance}`;
  }
  getbalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new Balance();
//console.log(account.#balance) //  this will give error as we cannot directly access the variable from class that's encapsulated
console.log(account.deposit(200));
console.log(account.getbalance());

// ------------------ ABSTRACTION --------------

// it means we just want the answer/output without any complex code its like an consumer

class CoffeeMachine {
  //call DB
  //some llines of code
  start() {
    return `Starting the machine....`;
  }
  brewCofee() {
    // some other code and DB checks
    // complex working
    return `brewing the coffee`;
  }
  // we can also store all of these messages in one method
  pressStart() {
    let messageone = this.start();
    let messagetwo = this.brewCofee();
    return `${messageone} + ${messagetwo}`;
  }
}
let myMachine = new CoffeeMachine();
console.log(myMachine.pressStart());

// -------------- POLYMORPHISM -------------------
// it means that different classes can have same name for a method and they do not interfere

class Cars {
  drive() {
    return `drifting...`;
  }
}

class BMW extends Cars {
  drive() {
    return `drift king...`;
  }
}

let Lakshay = new Cars();
let sahil = new BMW();
console.log(Lakshay.drive());
console.log(sahil.drive());

// ------------ Static -------------
// these are can only be called by/inside the class
// you can call the static function/method outside by without having an object of that class

class Add {
  static sum(a, b) {
    return a + b;
  }
}

// let adding = new Add()
// console.log(adding.sum(4,5))  // we cannot get sum called directly hara as it is as tatic function/method
console.log(Add.sum(4, 5)); // we cannnot get it by getting calculator

// ------------------ GETTER AND SETTER --------------------

class Employee {
  #salary;
  constructor(salary, age) {

    if (salary < 0) { // this will check for the constructor as it is not checked only get and set got checked 
      throw new Error("Invalid salary");
    }


    this.#salary = Salary; // this is giving a public field to a private field will not be accessed by outside
    // this.salary = #Salary; // this is assigning the value of private field to a public field that is not good
    this.age = age;
  }

  get salary() {
    return `you are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("invalid Salary");
    } else {
      this.#salary = value;
    }
  }
}

let Pritam = new Employee(-50000, 23);
console.log(Pritam.salary); // you can not see the salary but you can bypass this functionality
console.log(Pritam.salary); // you can (now) see the salary

// to protect from this js flaw we will use #(private field)

// console.log(Employee.#salary);

// SETTING THE SALARY;
Pritam.salary = -6000;
