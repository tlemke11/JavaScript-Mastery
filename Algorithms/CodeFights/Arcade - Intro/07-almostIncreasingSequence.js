//Help with Idea courtesy of https://codefights.com/profile/exodiquas
function almostIncreasingSequence(sequence, isTest) {
        removals = 0;
        firstIndex = 0;
        secondIndex = 1;
        while(firstIndex < sequence.Length && removals <= 1){
                if(sequence[firstIndex] < sequence[secondIndex]){
                    removals++;
                    sequence.splice(secondIndex,1);
                } else {
                    firstIndex++;
                    secondIndex++;
                }
        }
    if(!isTest){
        runTests();
    }
    return (removals < 2);
}

//Unit Tests
var testArray = [
        {
        'testName': 'simpleSequenceOneTwoThree',
        'testValues': [1,2,3]
        }
];

//Test Runner
function runTests(){
    console.log("TestRunner");


    failedTests = 0;

    for (var i = 0; i < testArray.length; i++){
         if(!testIncreasingSequence(testArray[0].testValues,testArray[0].testName)){
             failedTests++;
         };
    }

    if(failedTests != 0){
        console.log(failedTests + " Test(s) Failed")
    } else {
        console.log("All Tests Passed")
    }
}

//Test Helper
function testIncreasingSequence(testSequence, testName){
    if (almostIncreasingSequence(testSequence, true)){
        console.log(testName + "Passed");
        return true;
    } else {
        console.log(testName + "Failed")
        return false;
    }
}
