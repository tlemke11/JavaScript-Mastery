//Closure - What is this beast?
//"A closure is the combination of a function bundled together (enclosed) with
// references to its surrounding state (the lexical environment)."
//"In JavaScript, closures are the primary mechanism used to enable data privacy"
//https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36

//This means that a closure is a way to maintain a variable in memory even though a function has been executed.
//It is also a way of hiding variables from the global state, while still maintaining those variables.

//For Example:


function closureExample() {
    var amountOfTimesRun = 0;

    return function(){
        return console.log(++amountOfTimesRun);
    }
}

var runMe = closureExample();
runMe();//1
runMe();//2
runMe();//3