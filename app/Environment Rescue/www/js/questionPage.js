window.onload = function(){
    userID = localStorage.getItem("userID");
    console.log("THE USER ID IS ", localStorage.getItem("userID"))
    var currentPage = window.location.search.replace("?", "");
    document.body.style.backgroundImage = "url(img/backgrounds/" + currentPage + ".png)"; 
    getQuestions(currentPage);
    document.getElementById(currentPage).classList.add("selected");
}


//Function for get questions from the server
function getQuestions(currentPage){
    var data = "category=" + currentPage + "&userid=" + userID;
    console.log(data)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            try{
                questions = JSON.parse(this.responseText)
            }catch(err){
                console.log(err);
                alert(this.responseText);
                returnHome();
            }
            console.log(questions)
            
        }
    };
    xhttp.open("POST", "http://netscapes.crumbdesign.co.uk/app_server_files/getQuestions.php", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(data);
}

function startQuestions(currentPage){
    document.getElementById(currentPage).classList.remove("selected");
    buttons = document.getElementsByClassName("buttons")[0];
    document.getElementsByClassName("header")[0].classList.add("display");
    nextQuestion(0);
}

var buttons;

function nextQuestion(num){
    console.log("The num is " + num)
    submitAnswer();
    if(num < 0){
        num = 0
    } else {
        currentQuestion = questions[num];
        
        if(num < questionNum){//Code for fixing the transition when the user clicks back
            document.getElementById("questions").classList.add("left");
        }
        document.getElementById("questions").classList.remove("display");
        document.getElementById("questions").classList.add("away");
        setTimeout(function(){
            //Code for removing the next buttons if this is necessary
            if(num <= 0){
                buttons.getElementsByTagName("input")[0].classList.add("hide")
            } else {
                buttons.getElementsByTagName("input")[0].classList.remove("hide")
            }
            if(num >= questions.length-1){
                buttons.getElementsByTagName("input")[1].classList.add("hide");
                document.getElementsByClassName("header")[0].classList.add("end");//Replaces home button with finish button
            } else {
                buttons.getElementsByTagName("input")[1].classList.remove("hide")
                document.getElementsByClassName("header")[0].classList.remove("end");//Replaces finish button with home button
            }
            /*Code for setting up current question*/
            var questionBox = document.getElementById("questions");
            console.log(currentQuestion)
            questionBox.dataset.number = currentQuestion["id"];
            questionBox.getElementsByClassName("question")[0].innerHTML = currentQuestion.Question;
            if(currentQuestion.Type == "Multiple_Choice"){
                questionBox.getElementsByClassName("display")[0].classList.remove("display");
                questionBox.getElementsByClassName("multipleChoice")[0].classList.add("display");
                
                var options = questionBox.getElementsByClassName("choices")[0].getElementsByClassName("option");
                for(i=0; i<4; i++){
                    options[i].value = currentQuestion["Option" + (i+1)];
                }
            }
            
            
            if(currentQuestion.Type == "Range"){
                questionBox.getElementsByClassName("display")[0].classList.remove("display");
                questionBox.getElementsByClassName("figure")[0].classList.add("display");
                
                var range = questionBox.getElementsByTagName("input")[0];
                range.min = currentQuestion.Min;
                range.max = currentQuestion.Max;
                range.value = range.max/2;
                changeFont(range);
                setResponse(range.value)
                range.dataset.unit = currentQuestion.Units;
                document.getElementById("rangeValue").innerHTML = range.value + range.dataset.unit;
                
                range.oninput = function(){
                    document.getElementById("rangeValue").innerHTML = this.value + this.dataset.unit
                    setResponse(this.value)
                    changeFont(this)
                }
            }
            
            document.getElementById("questions").classList.remove("away");
            setTimeout(function(){
                document.getElementById("questions").classList.remove("left");
                document.getElementById("questions").classList.add("display");
                questionNum = num;
            }, 50)
        },700)
    }
}

var answers = new Array();
var response;

function submitAnswer(){//Code to store the results of the question
    var questionBox = document.getElementById("questions");
    var id = questionBox.dataset.number;
    if(id != undefined){
        try{
            answers[id].id = id;
            answers[id].question = questionBox.getElementsByClassName("question")[0].innerHTML;
            answers[id].response = response;
        }catch(err){
            var newAnswer = new Object();
            newAnswer.userID = userID;
            newAnswer.id = id;
            newAnswer.question = questionBox.getElementsByClassName("question")[0].innerHTML;
            newAnswer.response = response;
            answers.push(newAnswer)
        }
        console.log(JSON.stringify(answers))
    }
}

function saveResults(followUp){//Function to send the results to the database
    console.log(answers)
    var data = "results=" + JSON.stringify(answers);
    console.log(data)
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log("Results Saved")
            console.log(this.responseText)
            setTimeout(followUp, 500);
            //followUp();
        }
    };
    xhttp.open("POST", "http://netscapes.crumbdesign.co.uk/app_server_files/saveResults.php", true);
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhttp.send(data);
}


function setResponse(value){
    response = value;
}


//Minor functions
function changeFont(item){//Changes the font size of the range slider
    var fontSize = 1;
    var range = item.max - item.min;
    fontSize = fontSize + (1*(1/range)*item.value);
    document.getElementById("rangeValue").style.transform = "scale(" + fontSize + ")";
}

function scorePage(){
   // window.location = "Score.html"
}

function returnHome(){
    window.location = "index.html"
}