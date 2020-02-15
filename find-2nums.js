// find two numbers in a array that multiply to a given number 20

const arr = [2,3,11,4,6,21,5,9,10];

function find2nums(arr) {
    for(let i=0; i<arr.length;i++) {
        for(let j=i+1; i<arr.length;j++) {
            console.log("num: ", arr[j]);
            if((20/arr[i]) == arr[j]) {
                return console.log("numbers: ", arr[j] + " x " + arr[i] + " = 20");
            }
        }
    }
}

find2nums(arr);