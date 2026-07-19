/// String Search Methods

// String indexOf()
// String lastIndexOf()
// String search()
// String match()
// String matchAll()
// String includes()
// String startsWith()
// String endsWith()


/// The indexOf() method returns the index
//  (position) of the first occurrence of a string in a string,
//  or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");

/// The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let text1 = "Please locate where 'locate' occurs!";
let index1 = text.lastIndexOf("locate");

// ==>Both indexOf(), and lastIndexOf() return -1 if the text is not found:

/// The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15,
//  the search starts at position 15, and searches to the beginning of the string.
let text2 = "Please locate where 'locate' occurs!";
text.lastIndexOf("locate", 15);


/// The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let text3 = "Please locate where 'locate' occurs!";
text.search("locate");
let text4 = "Please locate where 'locate' occurs!";
text.search(/locate/);

// The search() method cannot take a second start position argument.
// The indexOf() method cannot take powerful search values (regular expressions).

//The match() method returns an array containing the results of matching a string against a string (or a regular expression).

let text0 = "The rain in SPAIN stays mainly in the plain";
text.match("ain");

let text01 = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/);

let text02 = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);

let text03 = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);

// The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
const iterator = text.matchAll("Cats");

const iterator1 = text.matchAll(/Cats/g);

const iterator2= text.matchAll(/Cats/gi);

// The includes() method returns true if a string contains a specified value.
// Otherwise it returns false.

let text09 = "Hello world, welcome to the universe.";
text.includes("world");

let text08 = "Hello world, welcome to the universe.";
text.includes("world", 12);
// Check if a string includes "world". Start at position 12:

// The startsWith() method returns true if a string begins with a specified value.
// Otherwise it returns false:
let text07 = "Hello world, welcome to the universe.";
text.startsWith("Hello");//true

let text06 = "Hello world, welcome to the universe.";
text.startsWith("world")//false

// The endsWith() method returns true if a string ends with a specified value.
// Otherwise it returns false:

let text05 = "John Doe";
text.endsWith("Doe");

let text04 = "Hello world, welcome to the universe.";
text.endsWith("world", 11);
