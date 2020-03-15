let nums = [1,2,3,4,1,2,4,3];
let newArr = new Map();

function getDup(arr) {
    for(let n=0; n< arr.length; n++) {
        //console.log(arr[n]);
        if(arr[n] != newArr.get(n)) {
            newArr.set(arr[n], 1);
        }
    }
}

console.log(getDup(nums));