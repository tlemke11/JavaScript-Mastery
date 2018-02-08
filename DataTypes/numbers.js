/*
Oh, the glorious numbers.
But what is a number? Well it can be a few things:

According to ES5 (http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.19)

A Number is a double-precision 64-bit binary format IEEE 754 value

A Number can be any number that can fit in the double-precision format above, NaN(Not-A-Number) values,
positive and negative infinity
 */

//Ok, so what does all of this mean in code?
//Basically, double-precision numbers do funny things when they are rounded and can cause issues with any fraction

var doublePrecisionConfusion = 0.1 + 0.2;
if (doublePrecisionConfusion === 0.3){
    console.log("You would expect this to show;")
}
else {
    console.log("But instead, the confusing truth is revealed. 0.1 + 0.2 = " + doublePrecisionConfusion) //0.3000...4
}


//What about this NaN nonsense? What is all that about?
//NaN numbers are the result of "floating point" exceptions and can be thrown when invalid operations or non-numbers
//are used during calculations or if you try to cast a non-number as a number (i.e. parseInt() and parseFloat())
//https://en.wikipedia.org/wiki/IEEE_754-1985#NaN
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

var NaN = "this is not a number" + 2;
console.log(NaN);

console.log("casting a string to a number makes it a...? " + parseInt("NaN"));

console.log("You can catch the NaNs with the isNaN function " + isNaN(parseInt("NaN")) + ", you caught a NaN Pokemon!");

//But what about infinity? Why is that there?







//TODO - expand explaination of double-precision 64-bit binary format IEEE 754 -
// https://en.wikipedia.org/wiki/Double-precision_floating-point_format

