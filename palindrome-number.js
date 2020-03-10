function isPalindrome(x) {
    let len = x.length-1;
    x = Math.abs(x);
    if(x[0] != x[len]) {
       return false;
       } else {
        return true;
    }
};

isPalindrome(-121);