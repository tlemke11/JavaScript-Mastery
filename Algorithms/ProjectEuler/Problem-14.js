function getNextCollatzNumber(number){
  let returnValue;
  if(number % 2 === 0){
    returnValue = number / 2;
  } else {
    returnValue = number*3 + 1;
  }
  return returnValue;
}

function calculateCollatzChainLength(number){
  let total= 1;
  while(number != 1){
    number = getNextCollatzNumber(number);
    total+=1;
  }
  return total;
}

function calculateMaximumCollatzLength(maxValue){
  let max = {
    number: 0;
    ChainLength: 0;
  }
  for(let i = 2; i <= maxValue; i++){
    let iterationLength = calculateCollatzChainLength(i);
    if(max.ChainLength < iterationLength){
      max.ChainLength = iterationLength;
      max.number = i;
    }
  }
  return max.Number;
}

console.log(calculateMaximumCollatzLength(1000000));