var sections,
    background,
    frame,
    windowW,
    ratioVal;

window.onload = () => {
    sections = document.getElementsByClassName('section');
    background = document.getElementsByClassName('background')[0];
    frame = document.getElementsByClassName('background__frame')[0];
    isInView();
}

window.onscroll = () => {
    isInView();
}

window.onresize = () => {
    isInView();
    resizePos();
}

var heightOffset

function windowRatio(ratio) {
    windowW = (window.innerWidth*2)*1.33;//WindowWidth*2 * comparitive height of image
    heightOffset = (window.innerWidth/16)*9//works out how high the screen should be for the image
    heightOffset = (heightOffset-window.innerHeight);//Difference between expected window height and actual window height
    //ratio = ratio + heightOffset;
    ratioVal = windowW * ratio;
    /* console.log("windowW:", windowW)
    console.log("RatioValue:", ratioVal)
    console.log("heightOffset:" + heightOffset) */

}

function isInView() {
    if (!document.getElementsByClassName('section:not(.active)')) return;

    for (var i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top <= window.innerHeight * 0.30 && sections[i].getBoundingClientRect().top > -window.innerHeight / 1.4) {
            var currentSection = sections[i].classList[1];
            switch(currentSection) {
                case 'section--1':
                    windowRatio();
                    //console.log("section one");
                    background.classList.add('stage--1');
                    background.classList.remove('stage--2', 'stage--3', 'stage--4');
                    frame.style.transform = "";
                break;
                case 'section--2':
                    windowRatio(0.3);
                    //console.log("section two");
                    background.classList.add('stage--2');
                    background.classList.remove('stage--1', 'stage--3', 'stage--4');
                    //console.log(frame, ratioVal);
                    frame.style.transform = "translateY(-"+ratioVal+"px)";
                break;
                case 'section--3':
                    windowRatio(0.41);
                    //console.log("section three");
                    background.classList.add('stage--3');
                    background.classList.remove('stage--1', 'stage--2', 'stage--4');
                    frame.style.transform = "translateY(-"+ratioVal+"px) translateX(-98vw)";
                break;
                case 'section--4':
                    windowRatio(0.9);
                    //console.log("section four");
                    background.classList.add('stage--4');
                    background.classList.remove('stage--1', 'stage--2', 'stage--3');
                    frame.style.transform = "translateY(-"+ratioVal+"px) translateX(-98vw)";
                break;
                default:
                console.log("outside");
                background.classList.remove('stage--1', 'stage--2', 'stage--3', 'stage--4');
            }
            sections[i].classList.add('active');
        } else { sections[i].classList.remove('active')}
    }
}

function scrollEase(el,/*el, dur*/dir) {
    let targetPos;//target to scroll to

    for (let j = 0; j < sections.length; j++) {
        if (sections[j] === el) {
            targetPos = sections[j].getBoundingClientRect().top; //get position of target element relative to window
            targetPos = targetPos + window.pageYOffset; // add page offset to targetwindow to get position relative to document
            console.log("target Pos:",targetPos, "target element:", sections[j]);
        }
    }

    if (dir === "down") {
        var startPos = window.pageYOffset;// get current vertical position
        var int = setInterval(() => {
            window.scrollTo(0, startPos);
            startPos += 10;
            if (startPos >= targetPos){
                 clearInterval(int);
                 canScroll = true;
            }
        }, 10);

    } else if (dir === "up") {
        var startPos = window.pageYOffset;// get current vertical position
        var int = setInterval(() => {
            window.scrollTo(0, startPos);
            startPos -= 10;
            if (startPos <= targetPos){
                 clearInterval(int);
                 canScroll = true;
            }
        }, 10);
    }
}

var canScroll = true;

//Function that moves to the next section based on wheel/scroll direction
function nextSection(direction) {
    
    var index;
    if(canScroll){
        for (let i =0; i < sections.length; i++) {
            if (sections[i].classList.contains('active')) {
                index = i;
                if (index <= 0) index = 0;
                if (index >= sections.length) index = sections.length;
            }
        }
        //if (!index) return;
        console.log("index: ",index);
        if (direction === "up") {
            if (index <= 0) return;
            index--;
            scrollEase(sections[index], direction);
            //sections[index].scrollIntoView();
            
        } else if (direction === "down") {
            if (index === sections.length - 1) return;
            index++;
            scrollEase(sections[index], direction);

            
        }
        canScroll = false;
    }

}

function inverse(num) {
    var result = num > 0 ? Math.abs(num) * -1 :  Math.abs(num) * + 1;
    console.log("result", result);
    return result;
}


/* var scrollActive = false;//set scroll active to false by default */
var scrollingActive;
function scrolling(event) {
    if(canScroll){
    //console.log(event.type);
    if (event.type === "wheel") {
        //console.log(event.wheelDeltaY || event);
        var data = event.wheelDeltaY || inverse(event.deltaY);
        data > 0 ? nextSection("up") : nextSection("down");

    } else if (event.type === "keyup") {
       var input = event || window.event;
       input.preventDefault;
       if (input.keyCode == '38') {
            nextSection("up")
       } else if (input.keyCode == '40') {
            nextSection("down");
       } else return;
    }
}
}


var resizing = false;

function resizePos() {
    var currentSection;
    //console.log(resizing)
    
    if (resizing === false) {
        //locate section currently in view and save in currentSection
        for (var i = 0; i < sections.length; i++) {
            if (sections[i].getBoundingClientRect().top <= window.innerHeight * 0.30 && sections[i].getBoundingClientRect().top > -window.innerHeight / 1.4) {
                currentSection = sections[i];
            }
        }
        resizing = true
        var test = setTimeout(() => {
            switch(currentSection.id) {
                case 'section1':
                    location.href = "#section1";
                break;
    
                case 'section2':
                    location.href = "#section2";
                break;
    
                case 'section3':
                    location.href = "#section3";
                break;
                case 'section4':
                    location.href = "#section4";
    
                break;
                default:
            }
            resizing = false;
        },250);
    }

}

//Self invoking anonymous function that monitors scrolling events and calls scrolling function to handle scroll direction and section navigation
var scrollingTimeout;
var sameScroll = false;
(() => {
    document.onwheel = (e) => {
        e.preventDefault(e)
        if(!sameScroll){
            scrolling(e);
            sameScroll = true;
        }
        clearTimeout(scrollingTimeout);
        scrollingTimeout = setTimeout(function(){
            sameScroll = false;
        },100)
    }; 

    document.onkeyup = (e) => {
        scrolling(e)
    };
    
})();