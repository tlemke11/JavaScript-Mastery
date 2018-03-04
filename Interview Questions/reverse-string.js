//I was recently asked this question from an employer and I originally implemented a for loop
//and I want to do a better implementation

//TODO insert attempt here






//V2.0 - TODO Debugme

function reverseString(aString) {
    var reversedString = '';
    var index = aString.length - 1;

    splitString = aString.split('');

    splitString.map(function(letter){
        reversedString[index] = "a";
        index--;
    })

    return reversedString;
}
console.log(reverseString("walmart"));