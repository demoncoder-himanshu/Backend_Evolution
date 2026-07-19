// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 52,
//   eyeColor: "blue"
// };

/// Create an Object
// const person1 = {}; // empty object

/// Add Properties
// person1.firstName = "John";
// person1.lastName = "Doe";
// person1.age = 50;
// person1.eyeColor = "blue";

/// console.log(person1)

/// Create an Object
// const person3 = new Object({
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue"
// });


let student={
  name:"Yash",
  subjects:{sub1:"fewd",sub2:"psup"}
}
// console.log(student.subjects.sub2)

let product=[
  {id:1,name:"mobile",price:22},
  {id:2,name:"laptop",price:67},
  {id:3,name:"tab",price:22}
]
console.log(product[0].name)

function createPerson(name,age){
return {
  name:name,
  age:age,
  greet:function(){
    console.log("hi")
  }
}
}
let p = createPerson("himanshu",18)
console.log(p)
p.greet()