let arr = [];
let arr2 = [];

var getSum = function(a, b) {
    while(arr.length < a) {
        arr.push(1);
    }
    while(arr2.length < b) {
        arr2.push(1);
    }
    return arr.concat(arr2).length;
}
console.log(getSum(8,16));