let app = document.getElementById('app');
let getage = document.getElementById('age').value;

function ageCheck(getage) {
    console.log(getage);
    alert(getage);
    if(age >= 21) {
        app.innerHTML = "you can drink";
    }else if(age < 21){
        app.innerHTML = "can't drink";
    }
}

