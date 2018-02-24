/* Objects are the backbone of JavaScript
   Lets dive into how they work
 */

//The static Object methods

//Object.assign()
//Used for cloning js objects
var object1 = { one: 'number'};
var object2 = Object.assign({},object1);
console.log(object2);

//Object.freeze()