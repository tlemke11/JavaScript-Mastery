/*

What are the DataTypes in JavaScript?

 1. Primitives (non-object, immutable data types that have no methods)
    (https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

    Note to self (and others):
    From what I can gather, in JavaScript, primitives are synonymous with literals - but it isn't to be confused
    with constants - although constants use literals
    "a literal is a notation for representing a fixed value in source code"
    (https://en.wikipedia.org/wiki/Literal_(computer_programming))

 string
 number
 boolean
 symbol (ECMAScript 6(2015))
 undefined
 null
 */

// Even though string, number, boolean, and symbol are primitives, the interpreter automatically wraps the literal
// in their Object wrapper equivalents (String, Number, Boolean, Symbol) when a method for those types is called
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

//These two lines do the same thing, they create two primitive strings.
var exampleString = 'this is a string';
var exampleStringWithWrapperInstantiation = String('this is a string');// Instantiated via String global object
console.log('exampleString is a ' + typeof(exampleString) + ' object');
console.log('exampleStringWithWrapperInstantiation is a ' + typeof(exampleStringWithWrapperInstantiation) + ' object');
//But using the "New" keyword makes the string literal into a String Object
var exampleStringWithNewStringObject = new String('this is a string');
console.log('exampleStringWithNewStringObject is a ' + typeof(exampleStringWithNewStringObject) + ' object');
//you can get the value out of the object like so
console.log(exampleStringWithNewStringObject.valueOf());
//running eval on String objects instead of the literal can yield different results
// see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String for more info
// the  is what allows you to manipulate the string and call string methods
// on a string that should technically be immutable (because it is a literal) - the string gets wrapped in
// a new string object.
console.log(exampleStringWrapper.toUpperCase()); //output - "THIS IS A STRING"


/* 2. Object Data Types  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

 Object - is the main data type that is an object and all of the following are Prototypes of Object)
  Function
  Array
  Date
  RegExp
  Error
*/