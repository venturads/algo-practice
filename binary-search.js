let arr = [2,4,5,12,16,22,33,40,55];
let len = arr.length; s = 0; e = len - 1; mid = 0;

function bs(x, arr) {
    while(s <= e) {
        mid = (s + e)/2;
        if(arr[mid] == x) {
            return s;
        }else if(arr[s] > x) {
            e = mid-1;  
        }else {
            return -1;
        }
    }
}

const ans = bs(4, arr);
//console.log(Math.round(len/2));
console.log(ans);