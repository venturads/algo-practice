function pali(p) {
    let len = p.length;
    for(let n in p) {
        if(p[n] == p[len-1]) {
            console.log(p[n]);
            p[0] + p[len-1];
        }else{
            return false + " " + n + p[len-1];
        }
    } 
    return true;
}

console.log(pali('abba'));