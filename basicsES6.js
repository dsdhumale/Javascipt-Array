//arrow function

// const x = (x, y) => { return x * y };
// console.log(x(4,4));

//The Spread (...) Operator

// const fruit=["apple","Banana", ..."Mango"];
// const flower=["Rose","lotus","jasmine"];
// console.log(fruit);
// console.log(flower);
// const combine=[fruit, ...flower];

// const numbers = [23,55,21,87,56];
// let maxValue = Math.max(...numbers);
// console.log(maxValue);
// let minValue = Math.min(...numbers);
// console.log(minValue);

// The For/Of Loop

// const fruit=["apple","Banana", "Mango"];
// let text = "";

// for (let x of fruit) {
//   text += x + " "; 
//   console.log(x);
// }

// let language = "JavaScript";
// let text = "";

// for (let x of language) {
//     text += x + " ";
//     console.log(x);
// }

//JS Maps
// const fruits = new Map([
//     ["apples", 250],
//     ["bananas", 200],
//     ["mango", 100]
//   ]);
//   console.log(fruits);
//   console.log(fruits.get("apples"));
//   console.log(fruits.get("mango"));

// JS set

// const letters = new Set();
// letters.add("a");
// letters.add("b");
// letters.add("c");
// letters.add("c");
// console.log(letters.size);

// Class and constructer

// class Car {
//     constructor(name, year) {
//       this.name = name;
//       this.year = year;
//     }
//   }
//   const myCar = new Car("Ford", 2014);
//   const myCar2 = new Car("Audi", 2019);
//   console.log(myCar.name + " " + myCar.year);
//   console.log(myCar2.name + " " + myCar2.year);

//Symbol

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
//   let id = Symbol('id')
//   person[id] = 140353;
  
//   console.log(person[id] + " " + person.id );
  
// Default Parameter Values

// function myFunction(x, y = 10) {
//   return x + y;
// }
// console.log(myFunction(5));

//Function Rest Parameter

// function sum(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }

// let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// console.log(x);

//String.includes()

let text = "Hello world, welcome to the universe";
console.log(text.includes("world"));

//String.startsWith()

console.log(text.startsWith("Hello"));

//String.endsWith()

console.log(text.endsWith("universe"));

