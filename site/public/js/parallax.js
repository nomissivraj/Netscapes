var image;
var width;

function loadBackground(){
    image = document.getElementById("background").getSVGDocument();
    width = $(window).width();
    windowWidth = width*2;
     $("html, body").animate({
         scrollTop: 0,
         scrollLeft: 0
    }, 10);
}

var resize;

window.onresize = function(){
    clearTimeout(resize);
    resize = setTimeout(function(){
        width = $(window).width();
        var top = 0;
        var left = 0;
        if(currentStage == "stage1"){
            top = width*0.4;
        }
        if(currentStage == "stage2"){
            top = width*1;
        };
        if(currentStage == "stage3"){
            top = width*1.3;
            left = width;
        };
        if(currentStage == "stage4"){
            top = width*1.7;
            left = width;
        };
        window.scrollTo(left, top);
        /*$("html, body").animate({
            scrollTop: top,
            scrollLeft: left
        }, 50, "linear");*/
    }, 1);
}

window.onkeypress = function(){
    if(event.keyCode == 49){
        stage1();
    }
    if(event.keyCode == 50){
        stage2();
    }
    if(event.keyCode == 51){
        stage3();
    }
    if(event.keyCode == 52){
        stage4();
    }
}

var currentStage = "stage0";

function stage1(){
    currentStage = "stage1";
    console.log("Stage 1")
    $("html, body").animate({
        scrollTop: width*0.4,
        scrollLeft: 0
    }, 700);
    setTimeout(function(){
        image.querySelector("#clouds").style.transform = "none";
        image.querySelector("#cloud2").style.transform = "none";
        setTimeout(function(){
            image.querySelector("#baloon").style.transform = "translateX(-80%)";
        },700)
    }, 100);
}

function stage2(){
    currentStage = "stage2";
    console.log("Stage 2")
    image.querySelector("#baloon").style.transform = "translateX(-120%)";
    image.querySelector("#clouds").style.transform = "translateY(-20%)";
    image.querySelector("#cloud2").style.transform = "translateY(-20%)";
    $("html, body").animate({
        scrollTop: width*1,
        scrollLeft: 0
    }, 700);
    setTimeout(function(){
        image.querySelector("#land").style.transform = "none";
        image.querySelector("#sea").style.transform = "none";
        image.querySelector("#mountains").style.transform = "none";
        setTimeout(function(){
            image.querySelector("#ground").style.transform = "none";
            setTimeout(function(){
                image.querySelector("#trees").style.transform = "none";
            },200);
        },400);
    },300);
}

function stage3(){
    currentStage = "stage3";
    $("html, body").animate({
        scrollTop: width*1.3,
        scrollLeft: width
    }, 700);
    image.querySelector("#mountains").style.transform = "translateY(6%)";
    image.querySelector("#ground").style.transform = "translateY(5%)";
    image.querySelector("#trees").style.transform = "translateX(10%)";
}

function stage4(){
    currentStage = "stage4";
    $("html, body").animate({
         scrollTop: width*1.7,
         scrollLeft: width
    }, 700);
}