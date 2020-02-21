const app = document.getElementById('app');
let nums = [2,33,52,42];

// ternary operator
const getNums = nums ? true : false;

// present
if(getNums);

// for loop
for(let n of nums) {
    console.log("value: " + n);
}

for(let m in nums) {
    console.log("index: " + m);
}

app.innerHTML = getNums;