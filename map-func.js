let user = new user();
let name = "kobe";
let output = document.getElementById('app');

user.set(name.charCodeAt(0));

console.log(user.get(name.charCodeAt(0)));