function loadBackground(){
    image = document.getElementById("background").getSVGDocument();
    width = $(window).width();
}

var currentPage = "home";

function loadQuestions(button){
    var buttons = button.parentElement.getElementsByTagName("input");
    var area = button.dataset.name;
    currentPage = area;
    for(i=buttons.length-1; i>-1; i--){
        buttons[i].classList.add("hide");
    }
    setTimeout(function(){
        image.querySelector("#sky").classList.add(area);
        image.querySelector("#clouds").classList.add(area);
        image.querySelector("#cloud2").classList.add(area);
        image.querySelector("#baloon").classList.add(area);
        image.querySelector("#mountains").classList.add(area);
        image.querySelector("#land").classList.add(area);
        image.querySelector("#Layer_1-2").classList.add(area);
        image.querySelector("#sea").classList.add(area);
        image.querySelector("#trees").classList.add(area);
        image.querySelector("#ground").classList.add(area);
        setTimeout(function(){
            document.getElementById(area).classList.add("selected");
        }, 800);
    },1100);
}

function returnHome(){
    var buttons = document.getElementById("home").getElementsByTagName("input");
    var area = currentPage;
    document.getElementById(currentPage).classList.remove("selected");
    setTimeout(function(){
        image.querySelector("#sky").classList.remove(area);
        image.querySelector("#clouds").classList.remove(area);
        image.querySelector("#cloud2").classList.remove(area);
        image.querySelector("#baloon").classList.remove(area);
        image.querySelector("#mountains").classList.remove(area);
        image.querySelector("#land").classList.remove(area);
        image.querySelector("#Layer_1-2").classList.remove(area);
        image.querySelector("#sea").classList.remove(area);
        image.querySelector("#trees").classList.remove(area);
        image.querySelector("#ground").classList.remove(area);
        setTimeout(function(){
            for(i=0; i<buttons.length; i++){
                buttons[i].classList.remove("hide");
            }
        }, 700);
    }, 700)
}

var questionNum;

function nextQuestion(num){
    questionNum = num;
    if(num < 0){
        num = 0
    }
    document.getElementById(currentPage).classList.remove("selected");
    document.getElementById("questions").classList.remove("display");
    document.getElementById("questions").classList.add("away");
    setTimeout(function(){
        document.getElementById("questions").classList.remove("away");
        setTimeout(function(){
            document.getElementById("questions").classList.add("display");
        }, 50)
    },700)
}