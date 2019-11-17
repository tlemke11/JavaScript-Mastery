//TODO finish - started 20 min so far
function lateRide(n) {
    minutes = n%60;
    hours = Math.floor(n/60);
    minutesSum = (minutes % 100 - minutes % 10) + minutes % 10;
    hoursSum = (hours % 100 - hours % 10) + hours % 10;
    return minutesSum + hoursSum;
}