let sgl = new Map();
let arr = [1,2,3,1];

function findDup(arr) {
    for(let n = 0; n<arr.length; n++) {
        if(sgl.get(n) == arr[n]){
            arr[n];
        }else{
            sgl.set(arr[n], n++);
        }
    } return sgl.keys();
}

console.log(findDup(arr));