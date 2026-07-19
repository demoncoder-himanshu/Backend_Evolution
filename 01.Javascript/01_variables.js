// prompt(input())
let a=4;  //let used for mutable variable
const b=7; //const used for un mutable variable
var k="hello"; // var not used for now sinse 2015 because it bad in debuging
let c=3,d=909,v=21; // you can declare as many variable at once
const g=a+b+c+d ;
console.log(g) // console.log == print



// String
let color = "Yellow";
let lastName = "Johnson";

// Number
let length = 16;
let weight = 7.5; //float

// BigInt
let x1 = 1234567890123456789012345n;
let y1 = BigInt(1234567890123456789012345)

// Boolean
let x2 = true;
let y2 = false;

// Object
const person = {firstName:"John", lastName:"Doe"};

// Array object
const cars = ["Saab", "Volvo", "BMW"];

// Date object
const date = new Date("2022-03-25");

// Undefined
let x3;
let y3;

// Null
let x4 = null;
let y4 = null;

// Symbol
const x5 = Symbol();
const y5 = Symbol();




// What is Good?

// let and const have block scope.

// let and const can not be redeclared.

// let and const must be declared before use.

// let and const does not bind to this.

// let and const are not hoisted.

// What is Not Good?

// var does not have to be declared.

// var is hoisted.

// var binds to this.