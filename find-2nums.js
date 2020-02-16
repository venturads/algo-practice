// find two numbers in a array that multiply to a given number 20

const arr = [2,22,10,11,4,6,21,5,9,10];

function find2nums(arr) {
    for(let i=0; i<arr.length;i++) {
        for(let j=i+1; i<arr.length;j++) {
            if((20/arr[i]) == arr[j]) {
                return console.log("found numbers: ", arr[j] + " x " + arr[i] + " = 20");
            }else{
                return console.log("can't find the number " + (20/arr[i]));
            }
        }
    }
}

find2nums(arr);