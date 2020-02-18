let arr = [2,3,5,2,5,8];
let len = arr.length;
let newarr = [];
let output = document.getElementById('app');
function findSinglesNumbers(nums) {
    for(let i of nums) {
        console.log(newarr);
    }
}
findSinglesNumbers(arr);
let checkAge = function(value) {
           return value == 5;
        }

console.log(arr.filter(checkAge));