//Got this question on 3/12/18


//You have "Buckets" that can contain Billiard balls with numbers on them. Each Bucket can contain more buckets or just
//balls - Make a function that goes throught all of the buckets and prints out fizz (if a ball divisiblbe
// by the number 3), buzz (if the ball is divisible by number 5), fizzbuzz if divisible by both, or just the number if it
// is not divisible by 3 or 5


function fizzBuzz(arrayOfNumbers){
    for(let index = 0; index < arrayOfNumbers.length; index++){
        if(arrayofNumbers[index] % 3 === 0 || arrayofNumbers[index] % 5 === 0){//I need to optimize this but it works
            if(arrayOfNumbers % 3 === 0){
                console.log('fizz');
            }

            if(arrayOfNumbers % 5 === 0){
                console.log('buzz');
            }
        } else {
            console.log(arrayOfNumbers[index])
        }
        console.log('\n');
    }
}


function fizzBuzzBucket(arrayOfBuckets){//I need to play around with using forEach/map/reduce more

    for(let index = 0; index < arrayOfBuckets.length; index++){
        //TODO if type of arrayOfBuckets[index] is array call array of Buckets on it

        //TODO also call fizzbuzz on the Bucket function
    }

}