//1st Attempt - 19 min - failing
//https://www.codewars.com/kata/palindrome-strings/train/javascriptgit

function isPalindrome(line) {
    if(line.length === 1){
        return true;
    }


    let front = 0;
    let back = line.length;
    while(front < (line.length/2) && back > (line.length/2) ){
        if(line[front] !== line[back]){
            return false;
        }
        front++;
        back--;
    }

    return true;
}