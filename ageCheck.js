let app = document.getElementById('app');

function ageCheck() {
    let getage = document.getElementById('age').value;
    //console.log(getage);
    //alert(getage);
    if(getage >= 21) {
        app.innerHTML = "you can drink";
    }else if(getage < 21){
        app.innerHTML = "can't drink";
    }
}

