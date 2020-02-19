let arr = [1,2,3];
let len = arr.length;
let newarr = [];
let output = document.getElementById('app');

// var singleNumber = function(nums) {
//     let res = nums[0], len = nums.length, i = 1
//     for(i; i< len; i++) {
//         res ^= nums[i];
//     }
    
//     return res;
// };

function permute(nums) {
    for(let n of nums) {
        console.log(n);
    }
};

permute(arr);

//const singleNumber = arr => arr.reduce((acc, curr) => acc^curr);