window.onload = function (){
    userID = localStorage.getItem("userID");
    console.log("THE USER ID IS ", localStorage.getItem("userID"))
    loadAnswers();
}

function loadAnswers(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            var response = JSON.parse(this.responseText);
            console.log(response)
            setScore("visualisation", response.total);
            setScore("Atmosphere", response.atmosphere);
            setScore("Ground", response.ground);
            setScore("Sea", response.sea);
            setScore("Subsurface", response.subsurface);
        }
    };
    xhttp.open("POST", "http://netscapes.crumbdesign.co.uk/app_server_files/getScores.php", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send("userid=" + userID);
}

function setScore(name, score){
    var speed = score/10;
    var displayScore = 0;
    var color = 0;
    var shadow = 0;
    var element = document.getElementById(name).getElementsByClassName("score")[0];
    var scoreInterval = setInterval(function(){
        displayScore+= speed;
        element.innerHTML = Math.round(displayScore);
        if(displayScore >= score && score >= 0){
            clearInterval(scoreInterval);
            element.innerHTML = score;
        }
        if(displayScore <= score && score <= 0){
            clearInterval(scoreInterval);
            element.innerHTML = score;
        }
        
        //Code for the visualisation Color
        if(name == "visualisation"){
            color = displayScore*2.55 //MaxDisplayScore(100) * MaxColor(255)
            shadow = displayScore*0.9;//MaxDisplayScore(100) * MaxShadow(90)
            if(score < 0){
                color = "rgb(" + (0-color) + ",0,0)";
                shadow = 0 - shadow;
            } else {
                color = "rgb(0," + color + ",0)";
            }
            element.parentElement.style.color = color;
            element.parentElement.style.boxShadow = color + " 0 0 " + shadow + "px";//Sets color and shadow
        }
    }, 100);
}

function returnHome(){
    window.location = "index.html";
}

//[{"Question": "How many whales are there?", "Reality": "27", "UserAnswer": 271, "Average": {"1-10": 20, "10-20": 300, "30-40": 2}}]