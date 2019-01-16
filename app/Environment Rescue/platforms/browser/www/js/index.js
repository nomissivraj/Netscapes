var questionNum;
var questions;

var userID;

window.onload = function(){
    //Code to test if user is already logged in
    if(localStorage.getItem("loginState") == "true"){
        document.getElementById("login").style.transition = "none";
        document.getElementById("home").style.transition = "none";
        closeLogin();
        var credentials = localStorage.getItem("credentials").split(":");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText.split("/");
                if(response[0] == "success"){//If the login is successful this will get called.
                    userID = response[1];
                    closeLogin();
                } else {
                    logout();
                }
            } else if (this.readyState == 4) {
                logout();
            }
        };
        xhttp.open("POST", "http://netscapes-nodejs.crumbdesign.co.uk/signinapp", true);
        xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhttp.send("email=" + credentials[0] + "&password=" + credentials[1]);
    }
}

function loadPage(page){
    window.location = "Questions.html?" + page.dataset.name;
}

//Login information
function changeMode(){
    document.getElementById("login").classList.toggle("signup");
}

function signin(element){
    document.getElementById("login").classList.add("loading");
    /*(var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var response = this.responseText.split("/");
            if(response[0] == "success"){//If the login is successful this will get called.
                alert("Stage1")
                userID = response[1];
                localStorage.setItem("loginState", "true")
                localStorage.setItem("credentials", element.getElementsByClassName("email")[0].value + ":" + element.getElementsByClassName("password")[0].value);
                closeLogin();
            } else {
                document.getElementById("login").classList.remove("loading");
                alert(response[1])
            }
        } else if(this.readyState == 4){
            alert("Error " + this.status)
        }
    };
    xhttp.open("POST", "http://netscapes-nodejs.crumbdesign.co.uk/signinapp", true);
    xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhttp.send("email=" + element.getElementsByClassName("email")[0].value + "&password=" + element.getElementsByClassName("password")[0].value);*/
    
    try{
        cordovaHTTP.post("http://netscapes-nodejs.crumbdesign.co.uk/signinapp", {
            email: element.getElementsByClassName("email")[0].value,
            password: element.getElementsByClassName("password")[0].value
        },{"Content-Type": "application/x-www-form-urlencoded"}, function(response) {
            var test = new Object();
            test.responseText = response.data;
            alert(test.responseText)


            var response = test.responseText.split("/");
            if(response[0] == "success"){//If the login is successful this will get called.
                userID = response[1];
                localStorage.setItem("loginState", "true")
                localStorage.setItem("credentials", element.getElementsByClassName("email")[0].value + ":" + element.getElementsByClassName("password")[0].value);
                closeLogin();
            } else {
                document.getElementById("login").classList.remove("loading");
            }

        }, function(response) {
            // prints 403
            alert(response.status);

            //prints Permission denied 
            alert(response.error);
        });
    }catch(err){
        alert(err.message)
    }
}

function signup(element){
    document.getElementById("login").classList.add("loading");
    if(element.getElementsByClassName("password")[0].value != element.getElementsByClassName("password")[1].value){
        alert("Your passwords do not match!")
    } else if(element.getElementsByClassName("password")[0].value == ""){
        alert("Please enter a valid password")
    } else {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var response = this.responseText.split("/");
                if(response[0] == "success"){//If the login is successful this will get called.
                    userID = response[1];
                    localStorage.setItem("loginState", "true")
                    localStorage.setItem("credentials", element.getElementsByClassName("email")[0].value + ":" + element.getElementsByClassName("password")[0].value);
                    closeLogin();
                } else {
                    document.getElementById("login").classList.remove("loading");
                    alert(response[1])
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
        localStorage.setItem("userID", userID)
        document.getElementById("home").classList.add("display");
        document.getElementById("login").classList.remove("loading");
    },700);
}

function logout(){
    document.getElementById("login").style.transition = "";
    document.getElementById("home").style.transition = "";
    localStorage.removeItem("loginState")
    localStorage.removeItem("credentials");
    setTimeout(function(){
        document.getElementById("home").classList.remove("display");
        setTimeout(function(){
            document.getElementById("login").classList.remove("hide");
        },700)
    },10)
}