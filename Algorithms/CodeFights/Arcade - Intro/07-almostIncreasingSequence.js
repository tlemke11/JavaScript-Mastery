//From Code Fights

//Check sequence[] to see if you can remove just one element in order
//to have an increasing sequence
//
//i.e. [1, 2, 4, 3, 4, 5] is true because if you remove just the 4 you have
//an increasing sequence

function almostIncreasingSequence(sequence) {

let i = 0;
let j = 1;
let currentSequenceNumber = null;
let removeCounter = 0;

if (sequence[i] >= sequence[j] || (sequence[i] + 1 != sequence[j])){
    i++;
    j++;
    removeCounter++;
}

console.log(removeCounter);
while((j <= sequence.length) && (removeCounter <= 1) && sequence.length > 3){

    if(currentSequenceNumber === sequence[i] || currentSequenceNumber === sequence[j]){
        return false;
    }
    console.log("this is i: " + i + " " + "and this is j: " + j)
    if(sequence[i] >= sequence[j] || (sequence[i] + 1 != sequence[j]))  {
        removeCounter++;
        currentSequenceNumber = sequence[j];
        j++;
    } else {
    currentSequenceNumber = sequence[j];
    i += 2;
    j += 2;
    }
}

if(removeCounter > 1){
    return false;
}

return true;
}


//Aglorithm
//
//
