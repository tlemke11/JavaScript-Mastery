/*
* So what is a STRING ?
* ECMAScript 5 defines it as:
* "primitive value that is a finite ordered sequence of zero or more 16-bit unsigned integer" (1)
* It goes on to state that it is typically a "16-bit unit of UTF-16 text"
*
* For more on UTF-16 See https://en.wikipedia.org/wiki/UTF-16
* */

//This is how you declare a string primitive

var literal = "this is a primitive string that is immutable";

//Lets go over the most important string methods
//https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Useful_string_methods


//Length
console.log(literal.length); //returns 44 (for amount of characters)

//Square Bracket Notation
console.log(literal[0]); //returns t in "this is a..." since JavaScript uses zero-based numbering
console.log(literal.length-1) //returns the e in "... is immutable", we don't want to fly off the end of the array

//SubStrings
console.log(literal.indexOf('is a')); //returns 5, or the index of where this substring is found
console.log(literal.indexOf('Mr. Rogers')); //this returns a -1 and lets you know that this substring doesn't exist

//Slice
console.log(literal.slice(1,4)); //returns 'his' in "this is..." - first param = char1, second param = last char + 1
console.log(literal.slice(-4)); // returns the last 4 characters of the string or "able"
console.log(literal.slice(-4 , -2)); // returns the 4th and 3rd to the las characters of the string or "ab"
console.log(literal.slice(0, -1)); // get the whole string, although I cant quite understand why you would do this

//UpperCase and Lowercase
console.log(literal.toUpperCase()); //returns literal as UPPERCASE string
console.log(literal.toLowerCase()); //returns literal as lowercase string

//Replace
console.log(literal.replace('that', 'this')); // when you log this you get two outputs, both the new and the old
console.log(literal.replace(/\w/, function(){return 'hello t'})); //you can do crazy stuff with regexp and functions
git

