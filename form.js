let app = document.getElementById('app');

function ageCheck(age) {
    if(age >= 21) {
        app.innerHTML = "you can drink";
    }else if(age < 21){
        app.innerHTML = "can't drink";
    }
}

