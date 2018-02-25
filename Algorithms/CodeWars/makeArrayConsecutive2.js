//Code Wars - Edge of the Ocean

//First Try - 18 Min
function makeArrayConsecutive2(statues) {
    //sort the array
    //make a counter
    //counter++ when the next item in array is not equal to i+1
    statues.sort();
    let counter = 0;
    let previousValue = statues[0];
    for(let i = 1; i < statues.length; i++){
        let gap = 1;
        while(previousValue + gap !== statues[i]){
            counter++;
            gap++;
        }
        previousValue = statues[i];
    }
    return counter;
}


//Second Try - 38 min total
//https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly
function makeArrayConsecutive2(statues) {
    //sort the array
    //make a counter
    //counter++ when the next item in array is not equal to i+1
    statues.sort((f, s) = > f - s
)
    ;
    let counter = 0;
    let previousValue = statues[0];
    for (let i = 1; i < statues.length; i++) {
        let gap = 1;
        while (previousValue + gap !== statues[i]) {
            counter++;
            gap++;
        }
        previousValue = statues[i];
    }
    return counter;
}