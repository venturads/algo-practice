let arr = [2,4,5,12,16,22,33,40,55];
let mid = 0, s = 0; e = arr.length -1;  

function bs(x, arr) {
    while(s <= e) {
        mid = Math.floor((e + s) / 2);
        if(arr[mid] == x) {
            return arr[mid];
        }else if(x > arr[mid]) {
            s = mid + 1;
        }else{
            e = mid - 1;
        }
    }
    return -1;
}

const ans = bs(16, arr);
//console.log(Math.round(len/2));
console.log(ans);