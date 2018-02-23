/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

   Math is a Global Static Object with static properties and methods.

   Here is the list of the most useful Math Methods (this has no imperical backing)

   TODO - I may have mentioned this elsewhere, but it would be nice to have a section
   dedicated for real use cases of all methods listed
 */

//Math.min(<firstNumber>, <secondNumber)
//return the smallest value of two numbers
console.log(Math.min(1,2)); //1

//Math.max(<firstNumber>, <secondNumber)
//return the greatest value of two numbers
console.log(Math.max(1,2)); //2

//Math.floor()
//Rounds a number down to nearest integer
console.log(Math.floor(10.95)); //10

//Math.ceil()
//Rounds a number up to nearest integer
console.log(Math.ceil(10.1)); //111

//Math.round()
//Round .5 up or .49 down with either negative or positive numbers.
console.log(Math.round(0.5));  //1
console.log(Math.round(-1.5)); //-2
console.log(Math.round(0.49)); //0

//Math.abs()
//Get absolute value of a number
console.log(Math.abs(-0.5));  //0.5

//Math.random()
//Returns random value between 0 and 1 (and within the limits of a Float - see data types)
console.log(Math.random()); //0.91823028347 (or another long, pseudo-random number)

//Math.sqrt()
//Returns square root of a number
console.log(Math.sqrt(4)); //2

//Math.pow(<base>, <exponent>)
//Return base number time itself n (exponent) times
console.log(Math.pow(2, 4)); //16