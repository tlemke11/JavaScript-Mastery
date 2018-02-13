//TODO - Add array background and other information




//The Most useful Array Functions
//http://vegibit.com/most-useful-javascript-array-functions/

var exampleArray = [1, 2, 3];

//push() - append items to end of array
exampleArray.push(4); // Array now contains [1, 2, 3, 4]

//indexOf() - return the index of first instance of value found
exampleArray.indexOf(2); // Returns 1, It would return 1 even if there were multiple 2 values inserted at the end

//slice() - takes 1 or two arguments that indicate what portion of the array you would like to keep
exampleArray.slice(1 , 3); // returns [2, 3] - the first value is the index of the first item, second is the index right after end

//toString() - converts entire array to comma separated string
exampleArray.toString(); // returns '1,2,3,4'

//filter() - filter every item that matches callback function -TODO explain better and more examples
exampleArray.filter(function(number) {return number === 1;}); //return 1 since this matches the filter

//join() - same as toString , but concats with a chosen modifier
exampleArray.join(' '); // return '1 2 3'

//splice() - delete one or more array items and replaces them with the provided value - mutates the array
//used when you want to delete an item from an array - instead of delete array[0] - because doing that leave array[0] undefined
exampleArray.splice(0, 2, 55); // returns [1, 2] and makes exampleArray [55, 3]

//forEach() - run a function on every element in an array
//Signature from MDN
//arr.forEach(function callback(currentValue[, index[, array]]) {
//    //your iterator
//}[, thisArg])
exampleArray.forEach(callbackFunction);

//concat() -