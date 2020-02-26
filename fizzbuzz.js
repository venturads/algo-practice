/**
 * @param {number} n
 * @return {string[]}
 */
// var fizzBuzz = function(n) {
//     for(let i in n) {
//         if(n[i] == 3) {
//             n[i] = "Fizz";
//         }else if(n[i] == 5) {
//             n[i] = "Buzz";
//         }else if((n[i]/5) == 3) {
//             n[i] = "FizzBuzz";
//         }
//     }
// };

var fizzBuzz = function(n) {
    return new Array(n).fill(0).map((a, i) => (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || '' + i);
};

let arr = [1,2,3,4,5,6,7,8,9,15];
console.log(fizzBuzz(arr));