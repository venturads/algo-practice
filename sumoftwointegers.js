var getSum = function(a, b) {
    let arr = [];
    while(arr.length < a || arr.length < b) {
        arr.push(1);
    }
    return arr.length;
}