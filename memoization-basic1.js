let runCounter = 0;

function getTime(num) {
    runCounter++;
    return num*num + ", run: " + runCounter;
}

console.log(getTime(2));
console.log(getTime(5));
console.log(getTime(2));