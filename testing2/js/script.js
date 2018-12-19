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
                    console.log("section one");
                    background.classList.add('stage--1');
                    background.classList.remove('stage--2', 'stage--3', 'stage--4');
                    frame.style.transform = "";
                break;
                case 'section--2':
                    windowRatio(0.09);
                    console.log("section two");
                    background.classList.add('stage--2');
                    background.classList.remove('stage--1', 'stage--3', 'stage--4');
                    //console.log(frame, ratioVal);
                    frame.style.transform = "translateY(-"+ratioVal+"vh)";
                break;
                case 'section--3':
                    windowRatio(0.11);
                    console.log("section three");
                    background.classList.add('stage--3');
                    background.classList.remove('stage--1', 'stage--2', 'stage--4');
                    frame.style.transform = "translateY(-"+ratioVal+"vh) translateX(-98vw)";
                break;
                case 'section--4':
                    windowRatio();
                    console.log("section four");
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

function scrollTo(el, pos, dur) {
    var startPos = el.scrollTop;
    var posChange = pos - startPos;
    //need to work out how to scroll element intop view 
}

//Function that moves to the next section based on wheel/scroll direction
function nextSection(direction) {
    var index;
    for (let i =0; i < sections.length; i++) {
        if (sections[i].classList.contains('active')) {
            index = i;
            if (index < 0) index = 0;
            if (index > sections.length) index = sections.length
        }
    }
    if (!index) return;
    console.log(index);
    if (direction === "up") {
        index--;
        console.log(sections[index]);
    } else {
        index++;
        console.log(sections[index]);
    }
//    direction === "up" ? console.log(sections[index]) : console.log(sections[index]);
}

/* var scrollActive = false;//set scroll active to false by default */
var scrollingActive;
function scrolling(event) {
    /* if (scrollActive) return;//if still scrolling do not continue with function
    scrollActive= true;//Scroll true as now active */
    window.clearTimeout(scrollingActive);//stops timeout/function from completing/running unless event has finished (stopping multiple function calls)
    scrollingActive = setTimeout(() => {
        var direction = this.oldScroll > this.scrollY ? nextSection("up") : nextSection("down");// If old scroll position is greater than current scrollY position console log up else down
        this.oldScroll = this.scrollY;//old scroll keeps track of current scrollY position
    },250);    
    
}

//Self invoking anonymous function that monitors scrolling events and calls scrolling function to handle scroll direction and section navigation
(() => {
    document.onwheel = (e) => {
        scrolling(e);
    }; 
    /*
    document.onscroll = (e) => {
        scrolling(e);
    }
    */
})();