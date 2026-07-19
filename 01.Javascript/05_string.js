let car1 = "Volvo XC60";  // Double quotes
let car2 = 'Volvo XC60';  // Single quotes


let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';


let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length; // find length


let line = "We are the so-called \"Vikings\" from the north." // \' \" \\
// We are the so-called "Vikings" from the north.


// \b	Backspace
// \f	Form Feed
// \n	New Line
// \r	Carriage Return
// \t	Horizontal Tabulator
// \v	Vertical Tabulator

/*The 6 escape characters above were originally designed
 to control typewriters, teletypes, and fax machines.
  They do not make any sense in HTML.*/


  let text1 =
`The quick
brown fox
jumps over
the lazy dog`;

/*
 The quick
 brown fox
 jumps over
 the lazy dog
*/

let x = "John";
let y = new String("John"); /// string to object


let x1 = new String("John");
let y1 = new String("John"); //// x1 == y1


let firstName = "John";
let lastName = "Doe";

let text2 = `Welcome ${firstName}, ${lastName}!`;

