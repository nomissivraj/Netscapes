function loadBackground(){
    image = document.getElementById("background").getSVGDocument();
    width = $(window).width();
}

function loadQuestions(button){
    var buttons = button.parentElement.getElementsByTagName("input");
    var area = button.dataset.name;
    for(i=buttons.length-1; i>-1; i--){
        buttons[i].style.opacity = "0";
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
    },1100);
}