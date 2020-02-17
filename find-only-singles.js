let arr = [2,3,5,2,5,8];
let len = arr.length;
let newarr = new Map();
function findSinglesNumbers(nums) {
    for(let i=0; i<len; i++){
        newarr.set(nums[i], 1);
        console.log(newarr);
    } 
}
findSinglesNumbers(arr);