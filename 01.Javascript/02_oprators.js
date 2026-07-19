// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// And more ...


// airthmetic oprators

let x = 5;
let y = 2;
let z = x + y;  // add
let z1 = x - y;  // sub
let z2 = x * y;  // muliply
let z3 = x / y;  //divide
let z4 = x % y;  // modules/reminder
let z5 = x ** 3;  // x power 3
let z6 = Math.pow(x,2); // x power 2

x++ // post incriment 1+
x-- // post decriment 1-
++x // pre incriment +1
--x // pre decriment -1

let z7 = (x+4)*(4-3)/(y%2)  // js using op like { () > / > * > +  > - }

console.log(z,z1,z2,z3,z4,z5,z6,z7)


// Assignment Operators

let m1 = 5;
let n2 = 2;
let p = m1 += n2; // same as m1 + n2
let p1 = m1 -= n2; // same as m1 - n2
let p2 = m1 /= n2; // same as m1 / n2
let p3 = m1 %= n2; // same as m1 % n2
let p4 = m1 *= n2; // same as m1 * n2
let p5 = m1 **= n2; // same as m1 ** n2

console.log(p,p1,p2,p3,p4,p5)

// Comparison Operators

let x1 = 5;
let y2 = 2;
let o = x1 < y2; // for compare y2 is bigger than x1
let o1 = x1 <= y2; // for compare y2 is bigger or equal to x1
let o2 = x1 > y2; // for compare y2 is smaller than x1
let o3 = x1 >= y2; //for compare y2 is smaller or equal to x1
let o4 = x1 == y2; // for compare the value
let o5 = x1 === y2; // for compare value as well as type 
let o6 = x1 != y2; // for compare not equal
let o7 = x1 !== y2; //for compare not equal value as well as type 

console.log(o,o1,o2,o3,o4,o5,o6,o7)


// logical oprators

let a=1;
let b=3;
let c = a==1 && b==3;  // both conditon true ==={AND}
let c1 = a==1 || b!=3;  // only one conditon true ==={OR}
let c2 = a==1 ?? b==3;  // null ==={null}

let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

let age = 0;
let userAge = age ?? 18;
console.log(userAge); // 0 (because 0 is not null/undefined)


console.log(c,c1,c2)
