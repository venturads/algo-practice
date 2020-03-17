let nums = [1,2,3,4,1,2,4,3];
let newArr = new Map();

function getDup(arr) {
    let m = 1;
    for(let n=0; n< arr.length; n++) {
        //console.log(arr[n]);
        if(arr[n] != newArr.get(n)) {
            newArr.set(arr[n], m);
        }else {
            m++;
        }
    }
     for(let i of newArr.keys()) {
        console.log(i);
         if(i >= 2) {
            console.log(newArr.get(i));
         }
        
     }
}

console.log(getDup(nums));