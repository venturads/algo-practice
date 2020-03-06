function pali(p) {
    let len = p.length;
    for(let n of p) {
        if(p[n] == p[len-1]) {
            console.log(n);
            p[0] + p[len-1];
        }console.log(n);
    } 
    return false;
}

console.log(pali('abba'));