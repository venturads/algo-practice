let user = new Map();
let users = ([24, "kobe"], [41, "fish"], [33, "shaq"]);
let output = document.getElementById('app');

user.set(name.charCodeAt(0), name, 41);

//console.log(user.get(name.charCodeAt(0)));

output.innerHTML = user.get(name.charCodeAt(0));

users.forEach(function(value, key) {
    console.log(key + ' = ' + value);
})