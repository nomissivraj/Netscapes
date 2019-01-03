var questionNum;
var questions;

var userID;

function loadPage(page){
    window.location = "Questions.html?" + page.dataset.name;
}

//Login information
function changeMode(){
    document.getElementById("login").classList.toggle("signup");
}

function signin(element){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText.split("/");
            if(response[0] == "success"){//If the login is successful this will get called.
                userID = response[1];
                closeLogin();
            } else {
                alert("Login invalid")
            }
        }
    };
    xhttp.open("POST", "http://netscapes-nodejs.crumbdesign.co.uk/signinapp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("email=" + element.getElementsByClassName("email")[0].value + "&password=" + element.getElementsByClassName("password")[0].value);
}

function signup(element){
    if(element.getElementsByClassName("password")[0].value != element.getElementsByClassName("password")[1].value){
        alert("Your passwords do not match!")
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText.split("/");
                if(response[0] == "success"){//If the login is successful this will get called.
                    userID = response[1];
                    closeLogin();
                } else {
                    alert("Login invalid")
                }
            }
        };
        xhttp.open("POST", "http://netscapes-nodejs.crumbdesign.co.uk/signupapp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("email=" + element.getElementsByClassName("email")[0].value + "&password=" + element.getElementsByClassName("password")[0].value);
    }
}

function closeLogin(){
    document.getElementById("login").classList.add("hide");
    setTimeout(function(){
        document.getElementById("home").classList.add("display");
    },700);
}