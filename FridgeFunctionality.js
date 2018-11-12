var FridgeID = 1001;

function eventListen(){
    //Space that will be used to listen for MQTT activations from the fridge but for now will be listening for keyboard commands
}

window.addEventListener("keydown", function(){
    if(event.keyCode == 79){
        wakeUp();
    }
    if(event.keyCode == 80){
        sleep();
    }
    if(event.keyCode == 32){
        snapshot();
    }
})

window.onload = getFood();//Just temporary so I don't have to keep waiting 10 seconds

function wakeUp(){
    document.body.classList.remove("sleep");
    startWebcam();
    getFood();
}

function sleep(){
    loadPage("menu");
    document.body.classList.add("sleep");
    stopWebcam();
}

var currentPage = "menu";

function loadPage(page){//Script for loading the different sections of the app
    wakeUp();
    document.getElementById(currentPage + "Page").classList.add("hidden");
    setTimeout(function(){
        document.getElementById(page + "Page").classList.remove("hidden");
        currentPage = page;
    },600);
}

function popup(msg, type, func){
    var popup = document.createElement("div");
    popup.id = "popup";
    var p = document.createElement("p");
    p.innerHTML = msg;
    
    var input = document.createElement("input");
    input.type = type;
    input.id = "popupValue"
    
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Confirm";
    
    popup.appendChild(p);
    popup.appendChild(input);
    popup.appendChild(button);
    document.body.appendChild(popup);
    return button
}

function closePopup(){
    document.getElementById("popup").parentNode.removeChild(document.getElementById("popup"))
}