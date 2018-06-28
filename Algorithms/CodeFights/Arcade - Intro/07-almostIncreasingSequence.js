//Help with Idea courtesy of https://codefights.com/profile/exodiquas
function almostIncreasingSequence(sequence, isTest) {
    removals = 0;
    firstIndex = 0;
    secondIndex = 1;
    while(firstIndex < sequence.Length && removals <= 1){
            if(sequence[firstIndex] <= sequence[secondIndex]){
                removals++;
                sequence.splice(secondIndex,1);
            } else if(sequence[firstIndex] >= sequence[secondIndex]){
                removals++;
                sequence.splice(firstIndex,1);
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
    'testName': 'Sequence 1,2,3 Asserts True',
    'testValues': [1,2,3],
    'assert': true
    },
{
    'testName': 'Sequence 1,3,2 Asserts True',
    'testValues': [1,3,2],
    'assert': true
},
{
    'testName': 'Sequence 1,3,2,1 Asserts False',
    'testValues': [1,3,2,1],
    'assert': false
}
];

//Test Runner
function runTests(){
console.log("TestRunner");
failedTests = 0;

for (var i = 0; i < testArray.length; i++){
     if(almostIncreasingSequence(testArray[i].testValues,true) != testArray[i].assert){
         failedTests++;
         console.log(testArray[i].testName + " FAILED!!");
     } else {
         console.log(testArray[i].testName + " Passed");
     }
}

if(failedTests != 0){
    console.log(failedTests + " Test(s) Failed")
} else {
    console.log("All Tests Passed")
}
}
