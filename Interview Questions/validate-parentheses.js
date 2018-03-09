//Check for valid parentheses

//Valid example - ()()((()()))

//Invalid example - )((()(

//took about 20-30 minutes in the interview

function checkParentheseNotation(aString) {
    let openParen = 0;
    let closeParen = 0;
    let lastParenisOpen = false;

    for (let i = 0; i < aString.length; i++) {

        //if we start with an closing -- return false
        if (closeParen === 1 && openParen === 0) {
            return false;
        }

        //check or count each opening or closing parentheses
        if (aString[i] === '(') {
            openParen++;
            //continue();
            lastParenisOpen = true;
        }

        if (aString[i] === ')') {
            closeParen++;
            //continue();
            lastParenisOpen = false;
        }
    }

    //compare both and see if they are equal and check last paren is not open
    if ((openParen === closeParen) && (lastParenisOpen === false)) {
        return true;
    }

    return false;

}

console.log(checkParentheseNotation('()())(')); //false
console.log(checkParentheseNotation('(x - y) + (x * z)')); //true
console.log(checkParentheseNotation('(((()(()(()())()()())')); //false