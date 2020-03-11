function isPalindrome(x) {
    //x = Math.abs(x);
    x = x.toString();
    let len = x.length-1;

    for(let n in x) {
        if(x[n] != x[len]) {
            return false;
        }else{
            len--;
        }
    } 
    return true;
};

console.log(isPalindrome(-121));