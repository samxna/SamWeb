var password;
var pass1="1234";

function validate(){

    let user_password = document.getElementById('password').value;

    if (user_password == pass1){
        window.location="home.html";
    }

    else{
        alert("Wrong password, please try again");
    }

}