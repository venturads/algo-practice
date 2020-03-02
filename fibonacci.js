let fibMap = new Map();

function fib(n) {
    if(fibMap.has(n)) {
        return fibMap.get(n);
    }else if(n == 1) {
        return 0;
    }else if(n == 2) {
        return 1;
    }else {
        let ans = (fib(n-1) + fib(n-2));
        console.log(ans);
        fibMap.set(n, ans);
        return ans;
    }
}

console.log(fib(8));