function knapsack() {
    if(n==0 || c==0) {
        result = 0;
    }else if(w[n] > c) {
        result = knapsack(n-1, c)
    }else {
        temp1 = knapsack(n-1, c);
        temp2 = v[n] + knapsack(n-1, c-w[n]);
        result = max{temp1, temp2};
    } return result;
}

let w = [1,2,4,2,5];
let c = [5,3,5,3,2];