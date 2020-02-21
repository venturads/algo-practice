let myHash = new Map();
myHash.set("k", "kobe");
myHash.set("s", "shaq");

console.log(myHash.get("k"));

for(const x of myHash.entries()) {
    console.log(x);
  }

const getH = myHash.get("m") ? true : false;

console.log(getH);