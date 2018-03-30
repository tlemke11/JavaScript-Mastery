function largestNumber(n) {
    //this took 6 min
    //for each digit add a 9
    // so if n = 4
    // "9" + "9" + "9" + "9"
    total = '9';

    for(let i = 1; i < n; i++){
        total += '9';
    }

    return Number(total);
}
