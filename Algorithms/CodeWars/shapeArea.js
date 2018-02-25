//From CodeWars - Shape Area Challenge - Edge of The Ocean
//Time - 47 min
function shapeArea(n) {
    let area = 1;
    for (let i = 2; i <= n; i++ ){
        area += (i - 1) * 4;
    }
    return area;
}