let arr = [1,2,3,4,1,2];
let newArr = new Map();

function getDup() {
    for(let n of arr) {
        if(arr[n] != newArr.get(n)) {
            newArr.set(arr[n], 1);
        }else{
            newArr.set(arr[n], 2);
        }
    }
    for(let i of newArr.entries()) {
        console.log(i);
    }

}

console.log(getDup(arr));