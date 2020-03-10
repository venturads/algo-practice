function reverse(x) {
    if(x < 0) {
        x = Math.abs(x);
        x = x.toString().split('').reverse().join('');
        return x = -parseInt(x);
    }else{
        return x.toString().split('').reverse().join('');
    }
};

console.log(reverse(-213));