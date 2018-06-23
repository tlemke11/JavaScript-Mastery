//Help with Idea courtesy of https://codefights.com/profile/exodiquas
function almostIncreasingSequence(sequence, isTest) {
        firstValue = sequence[0];
        removals = 0;
        index = 0;
        while(index < sequence.Length && removals <= 1){

        }
    if(!isTest){
        runTests();
    }
}


//Unit Tests
function runTests(){
    console.log("TestRunner");
    testArray = [
        {
        'testName': 'simpleSequenceOneTwoThree',
        'testValues': [1,2,3]
        }
                ];
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

function testIncreasingSequence(testSequence, testName){
    if (almostIncreasingSequence(testSequence, true)){
        console.log(testName + "Passed");
        return true;
    } else {
        console.log(testName + "Failed")
        return false;
    }
}
