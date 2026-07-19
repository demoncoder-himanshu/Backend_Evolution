// FORMAT OF ELSE IF

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}

//// if > else if > else

let age = 18;

if (age > 18) {
    console.log("Your age is above 18");
}
else if (age < 18) {
    console.log("Your age is below 18");
}
else{
    console.log("your age is 18")
}

let text = (age < 18) ? "Minor" : "Adult"; 
// faster way todo ifelse but not used by pros



// FORMAT OF SWITCH BASE

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

// swich case

let x = "0";
switch (x) {
  case 0:
    text = "Off";
    break;
  case 1:
    text = "On";
    break;
  default:
    text = "No value found";
}


/////BOOLEAN VALUES

let x100;
Boolean(x100);

//  X100==

//// if true  100 is true

// 3.14 is true

// -15 is true

// true is true

// "Hello" is true

// "false" is true

// (7 + 1 + 3.14) is true

//// IF FALSE

// 0 is false

// "" is false

// undefined is false

// null is false

// NaN is false

// false is false