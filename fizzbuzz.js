/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    for(let i in n) {
        if(n[i] == 3) {
            n[i] = "Fizz";
        }else if(n[i] == 5) {
            n[i] = "Buzz";
        }else if((n[i]/5) = 3) {
            n[i] = "FizzBuzz";
        }
    }
};