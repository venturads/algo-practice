let w = [null,1,2,4,2,5];
let v = [null,5,3,5,3,2];

function knapsack(n, c) {
    if(n==0 || c==0) {
        result = 0;
    }else if(w[n] > c) {
        result = knapsack(n-1, c)
    }else {
        temp1 = knapsack(n-1, c);
        temp2 = v[n] + knapsack(n-1, c-w[n]);
        result = Math.max(temp1, temp2);
    } return result;
}

console.log(knapsack(5, 10));