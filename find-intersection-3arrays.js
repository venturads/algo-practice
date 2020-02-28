let arr1 = [2,5,7,8,33];
let arr2 = [1,4,8,22,33];
let arr3 = [3,4,9,12,33];

function findinter(arr1, arr2, arr3) {
    let result = []; x = 0; y = 0; z = 0;
    while(!oob()) {
        if(arr1[x] == arr2[y] && arr3[z]) {
            result.push(arr1[x]);
            x++; y++; z++;
        }else if(arr1[x] < arr2[y]) {
            x++;
        }else{
            z++;
        }
    }
}