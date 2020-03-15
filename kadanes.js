/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let maxSoFar = -Infinity
    let max = -Infinity

    
    for(let i = 0 ;i < nums.length; i++){
        let current = nums[i]
        maxSoFar = Math.max(current, current + maxSoFar)
        max = Math.max(max, maxSoFar)
    }
    return max
};