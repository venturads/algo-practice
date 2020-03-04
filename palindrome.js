function pali(temp) {
    let len = temp.length;
    if(temp[0] == temp[len-1]) {
        return true + temp[0] + temp[len-1];
    }
    return false, len;
}

console.log(pali('sossaos'));