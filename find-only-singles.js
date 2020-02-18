let arr = [2,3,5,2,5,8];
let len = arr.length;
let newarr = [];
let output = document.getElementById('app');

var singleNumber = function(nums) {
    let res = nums[0], len = nums.length, i = 1
    for(i; i< len; i++) {
        res ^= nums[i];
    }
    
    return res;
};

console.log(singleNumber(arr));

//const singleNumber = arr => arr.reduce((acc, curr) => acc^curr);