/// METHODS OF STRING 

// String length
// String charAt()
// String charCodeAt()
// String codePointAt()
// String concat()
// String at()
// String [ ]
// String slice()
// String substring()
// String substr()
// String toUpperCase()
// String toLowerCase()
// String isWellFormed()
// String toWellFormed()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()
// String Tutorial
// String Search
// String Templates
// String Reference

// The length property returns the length of a string:
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;

// The charAt() method returns the character at a specified index
//  (position) in a string:
let text1 = "HELLO WORLD";
let char = text.charAt(0);


// The charCodeAt() method returns the code of the character
// at a specified index in a string:
// The method returns a UTF-16 code (an integer between 0 and 65535).

let text2 = "HELLO WORLD";
let char1 = text.charCodeAt(0);

let text3 = "HELLO WORLD";
let code = text.codePointAt(0);

// JavaScript String at()

const name = "W3Schools";
let letter = name.at(2);

const name1 = "W3Schools";
let letter1 = name[2];

/// The at() method is a new addition to JavaScript.
/// It allows the use of negative indexes while charAt() do not.
/// Now you can use myString.at(-2) instead of charAt(myString.length-2).

/// concat() joins two or more strings:

let text10 = "Hello";
let text20 = "World";
let text30 = text1.concat(" ", text2);

/// slice() extracts a part of a string and returns the extracted part in a new string.

let text4 = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);

// The method takes 2 parameters: start position,
// and end position (end not included).
// Slice out a portion of a string from position 7 to position 13:

/// substring() is similar to slice().

let str = "Apple, Banana, Kiwi";
let part4 = str.substring(7, 13);

// The difference is that start and end values less than,
// 0 are treated as 0 in substring().

/// A string is converted to upper case with toUpperCase() AND toLowerCase():

// JavaScript String toUpperCase()
let text11 = "Hello World!";
let text21 = text1.toUpperCase(); //text2 is text1 converted to upper

// JavaScript String toLowerCase()
let text12 = "Hello World!";       // String
let text22 = text1.toLowerCase();  // text2 is text1 converted to lower


/// The isWellFormed() method returns true if a string is well formed.
//   Otherwise it returns false.

/// A string is not well formed if it contains lone surrogates.
let text6 = "Hello world!";
let result = text.isWellFormed();

/// The String method toWellFormed() returns a new string where all 
//  "lone surrogates" are replaced with the Unicode replacement character (U+FFFD).
let text7 = "Hello World \uD800";
let result1 = text.toWellFormed();

/// The trim() method removes whitespace from both sides of a string:
let text01 = "      Hello World!      ";
let text02 = text1.trim();

/// The trimStart() method works like trim(), but removes whitespace only from the start of a string.
let text03 = "     Hello World!     ";
let text04 = text1.trimStart();

/// The trimEnd() method works like trim(), but removes whitespace only from the end of a string.
let text05 = "     Hello World!     ";
let text06 = text1.trimEnd();


/// padStart() and padEnd() to support padding at the beginning and at the end of a string.

// The padStart() method pads a string from the start.
// It pads a string with another string (multiple times) until it reaches a given length.
// Pad a string with "0" until it reaches the length 4:
let text07 = "5";
let padded = text.padStart(4,"0");

// The padEnd() method pads a string from the end.
// It pads a string with another string (multiple times) until it reaches a given length.
let text08 = "5";
let padded1 = text.padEnd(4,"0");


/// repeat and replace


// The repeat() method returns a string with a number of copies of a string.
// The repeat() method returns a new string.
// The repeat() method does not change the original string.

/// Create copies of a text:

let text09 = "Hello world!";
let result10 = text.repeat(2);


//// The replace() method replaces a specified value with another value in a string:
let text13 = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

// The replace() method does not change the string it is called on.
// The replace() method returns a new string.
// The replace() method replaces only the first match
// If you want to replace all matches, use a regular expression with the /g flag set. See examples below.


/// To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text0 = "Please visit Microsoft!";
let newText0 = text.replace(/MICROSOFT/i, "W3Schools");

/// To replace all matches, use a regular expression with a /g flag (global match):

let text00 = "Please visit Microsoft and Microsoft!";
let newText00 = text.replace(/Microsoft/g, "W3Schools");

// The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.
// If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");

/// A string can be converted to an array with the split() method:

text.split(",")    // Split on commas
text.split(" ")    // Split on spaces
text.split("|")    // Split on pipe