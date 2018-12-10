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
                    console.log(frame, ratioVal);
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

function scrolling(event) {
    var delay = false;
    console.log('scrolling-event');

    if (delay) return;
    delay = true;
    setTimeout(() => { delay = false }, 250);

    var direction = event.deltaY || -event.detail;
    console.log(direction);
}

(() => {
    document.onwheel = (e) => {
        scrolling(e);
    };
})();