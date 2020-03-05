function pali(temp) {
    let len = temp.length;
    for(let n of temp) {
        if(n == temp[len-1]) {
            console.log(n);
            return true + temp[0] + temp[len-1];
        }console.log(n);
    } 
    return false;
}

console.log(pali('sossaos'));