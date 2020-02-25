let arr = [2,4,5,12,16,22,33,40,55];
let len = arr.length; s = 0; e = len - 1; mid = Math.round(e/2);
console.log(len, s, e, mid);
function bs(x, arr) {
    while(s <= e) {
        mid = Math.round(e/2);
        if(arr[mid] == x) {
            return mid;
        }else if(arr[mid] > x) {
            e = mid-1;
            //mid = Math.round(s - e)/2;
        }else{
            e = mid - 1;
        }
    }
    return -1;
}

const ans = bs(22, arr);
//console.log(Math.round(len/2));
console.log(ans);