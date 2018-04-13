//about 7 min
function circleOfNumbers(n, firstNumber) {
    let middleModifier = n/2;
    if(firstNumber < middleModifier){
        return firstNumber + middleModifier;
    }
    return firstNumber - middleModifier;
}
