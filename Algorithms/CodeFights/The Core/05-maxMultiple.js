//about 7 min
function maxMultiple(divisor, bound) {
    let n = bound;
    while(n > 0 && (n % divisor != 0)){
        console.log("n equals " + n);
        n--;
    }
    return n;
}
