let myHash = new Map();
myHash.set(1, "kobe");
myHash.set(2, 23);

for(let i of myHash) {
    console.log(myHash.get(i));
}