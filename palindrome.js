function pali(p) {
    let len = p.length-1;
    for(let n in p) {
        if(p[n] != p[len]) {
            return false + " " + n + p[len];
        }else{
            console.log(p[n] + n);
            len--;
        }
    } 
    return true;
}

console.log(pali('abgba'));