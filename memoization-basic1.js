let runCounter = 0;
let runHash = new Map();

function getTime(num) {
    if(runHash.has(num)) {
        return runHash.get(num);
    }else {
        runHash.set(num, num*num);
    }
    runCounter++;
    return num*num + ", run: " + runCounter;
}

console.log(getTime(2));
console.log(getTime(5));
console.log(getTime(2));