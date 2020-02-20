let arr = [];
let arr2 = [];

// var getSum = function(a, b) {
//     while(arr.length < a) {
//         arr.push(1);
//     }
//     while(arr2.length < b) {
//         arr2.push(1);
//     }
//     return arr.concat(arr2).length;
// }
 
const getSum = function(a, b) {
    if(arr.length < a) {
        for(let i=0; i<a; i++) {
            arr.push(1);
        }
    }
    if(arr2.length < b) {
        for(let j=0; j<b; j++) {
            arr2.push(1);
        }
    }
    return arr.concat(arr2).length;
}

console.log(getSum(2,3));