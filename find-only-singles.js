let arr = [2,3,5,2,5,8];
let len = arr.length;
let newarr = [];
let output = document.getElementById('app');

const findSinglesNumbers = arr.forEach((item, index) => {
    item == newarr[index] ? newarr.splice(0, 1) : newarr.push(item)
    //console.log(newarr[index]);
} );

console.log(newarr);