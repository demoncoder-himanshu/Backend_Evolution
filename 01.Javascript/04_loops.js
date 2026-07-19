/* there are three types 

1.FOR
2.WHILE
3.DO WHILE */

// FORMAT OF FOR LOOP

let i =0;

for (i; i < 10; i++) {
  console.log(i)
}

/* 

for (exp 1; exp 2; exp 3) {
}

*/

// exp 1 is executed (one time) before the execution of the code block.

// exp 2 defines the condition for executing the code block.

// exp 3 is executed (every time) after the code block has been executed.


// FORMAT OF WHILE LOOP

while (i < 10) {
  text += "The number is " + i;
  i++;
}


// FORMAT OF DO WHILE LOOP === it exicute once even condition was true or not

do {
  text += "The number is " + i;
  i++;
}
while (i < 10);


//// CONTINUE OR BREAK

// Continue == The continue statement skips the current iteration in a loop.

for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

// Break == When break is encountered in a loop, the loop terminates immediately.

for (let i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text += "The number is " + i + "<br>";
}


//// FOR ARREY

///for

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let len = cars.length;

let text = "";
for (let i = 0; i < len; i++) {
  text += cars[i];
}

///while

const cars1 = ["BMW", "Volvo", "Saab", "Ford"];
let i1 = 0;
let text1 = "";

while (cars[i1]) {
  text += cars[i1];
  i1++;
}

