// bubble sort

const output = document.getElementById('app');
const output2 = document.getElementById('presort');

function bubbleSort(arr) {
    output2.innerHTML = arr;
    for(let i = 0; i < arr.length-1; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[i] > arr[j]) {
                let temp = arr[j]
                arr[j] = arr[i]
                arr[i] = temp
            }
        }
    }
    output.innerHTML = arr;
}

const nums = [5,4,3,2,1];
bubbleSort(nums);