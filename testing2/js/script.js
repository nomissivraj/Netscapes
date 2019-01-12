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
}

function windowRatio(ratio) {
    windowW = window.innerWidth;
    ratioVal = windowW * ratio;
    //might need to re-think this for > 1080p window width
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
                    windowRatio(0.09);
                    //console.log("section two");
                    background.classList.add('stage--2');
                    background.classList.remove('stage--1', 'stage--3', 'stage--4');
                    //console.log(frame, ratioVal);
                    frame.style.transform = "translateY(-"+ratioVal+"vh)";
                break;
                case 'section--3':
                    windowRatio(0.11);
                    //console.log("section three");
                    background.classList.add('stage--3');
                    background.classList.remove('stage--1', 'stage--2', 'stage--4');
                    frame.style.transform = "translateY(-"+ratioVal+"vh) translateX(-98vw)";
                break;
                case 'section--4':
                    windowRatio();
                    //console.log("section four");
                    background.classList.add('stage--4');
                    background.classList.remove('stage--1', 'stage--2', 'stage--3');
                    frame.style.transform = "";
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

    //i (first itteration) = starting position?
    //if i >= [num = target position]
    //target position keeps adding up till it matches target position in if statement
    //setInterval speed = speed of scroll
    console.log("current position: ",window.pageYOffset);

    if (dir === "down") {
        var startPos = window.pageYOffset;// get current vertical position
        var int = setInterval(() => {
            window.scrollTo(0, startPos);
            startPos += 10;
            if (startPos >= targetPos) clearInterval(int);
        }, 10);

    } else if (dir === "up") {
        var startPos = window.pageYOffset;// get current vertical position
        var int = setInterval(() => {
            window.scrollTo(0, startPos);
            startPos -= 10;
            if (startPos <= targetPos) clearInterval(int);
        }, 10);
    }
    


    //example:
    /* var i = 10;
    var int = setInterval(() => {
        window.scrollTo(0, i);
        i += 10;
        if (i >= 2000) clearInterval(int);
    }, 20); */
}

//Function that moves to the next section based on wheel/scroll direction
function nextSection(direction) {
    var index;
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
//    direction === "up" ? console.log(sections[index]) : console.log(sections[index]);
}

function inverse(num) {
    var result = num > 0 ? Math.abs(num) * -1 :  Math.abs(num) * + 1;
    console.log("result", result);
    return result;
}


/* var scrollActive = false;//set scroll active to false by default */
var scrollingActive;
function scrolling(event) {

    console.log(event.wheelDeltaY || event);
    var data = event.wheelDeltaY || inverse(event.deltaY);
    window.clearTimeout(scrollingActive);//stops timeout/function from completing/running unless event has finished (stopping multiple function calls)
    
    scrollingActive = setTimeout(() => {
        data > 0 ? nextSection("up") : nextSection("down");
    },250);
    /*//The following is for onscroll NOT onwheel
    window.clearTimeout(scrollingActive);//stops timeout/function from completing/running unless event has finished (stopping multiple function calls)
    scrollingActive = setTimeout(() => {
        var direction = this.oldScroll > this.scrollY ? nextSection("up") : nextSection("down");// If old scroll position is greater than current scrollY position console log up else down
        this.oldScroll = this.scrollY;//old scroll keeps track of current scrollY position
    },250);     */
}

//Self invoking anonymous function that monitors scrolling events and calls scrolling function to handle scroll direction and section navigation
(() => {
    document.onwheel = (e) => {
        e.preventDefault(e)
        scrolling(e);
    }; 
    /*
    document.onscroll = (e) => {
        scrolling(e);
    }
    */
})();