let listBg = document.querySelectorAll('.bg');
let banner = document.querySelector('.banner');
let tabs = document.querySelectorAll('.tab');
let container = document.querySelector('.container');
let heightDefault = container.offsetHeight;
let topBefore = 0;
let body = document.querySelector('body');

window.addEventListener('wheel', function(event){
    event.preventDefault();
    const scrollSpeed = 0.2;
    const scrollValue = window.scrollY + (event.deltaY/3) * scrollSpeed;
    window.scrollTo(0, scrollValue);



    let top = scrollValue;
    listBg.forEach((bg, index) => {
        if(index != 0){
            bg.animate({
                transform: `translateY(${(-top*index)}px)`
            }, { duration: 1000, fill: "forwards" });
        }
        if(index == listBg.length - 1){
            tabs.forEach(tab => {
                tab.animate({
                    transform: `translateY(${(-top*index)}px)`
                }, { duration: 500, fill: "forwards" });
            })

            if(topBefore < top){
                setHeight = heightDefault-window.scrollY*index;
                container.animate({
                    height: `${(setHeight + 100)}px`
                }, { duration: 50, fill: "forwards" });
                topBefore = window.scrollY;
            }
        }
        tabs.forEach((tab, index) => {
            // console.log(tab.offsetTop - top, window.innerHeight);
            if((tab.offsetTop - top) <= window.innerHeight*(index+1)){
                let content = tab.getElementsByClassName('content')[0];
                let transformContent = window.innerHeight*(index+1) - (tab.offsetTop - top);
                console.log(tab);
                content.animate({
                    transform: `translateY(${(-transformContent + (100*index))}px)`
                }, { duration: 500, fill: "forwards" });
            }
        })
    })
}, { passive: false });



var originalBackground = 'linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url(images/tab2.jpg)';

    
function changeBackground1() {
    var tab = document.querySelector('.tab.tab2');
    var card2 = document.querySelector('.card.card2');
    
    tab.style.background = 'linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url(img/warrior.jpg)';
    tab.style.backgroundRepeat = 'no-repeat'; // Prevent background image from repeating
    tab.style.backgroundSize = 'cover'; // Zoom and fit the background image
    card2.style.opacity = '0';
}


function restoreBackground1() {
    var tab = document.querySelector('.tab.tab2');
    var card2 = document.querySelector('.card.card2');
    tab.style.background = originalBackground;  
    card2.style.opacity = '1';
}

function changeBackground2() {
    var tab = document.querySelector('.tab.tab2');
    var card1 = document.querySelector('.card.card1');
    tab.style.background = 'linear-gradient(to top, #010302 0%, transparent 20%, #010302 80%), url(img/mage.jpg)';
    tab.style.backgroundRepeat = 'no-repeat'; // Prevent background image from repeating
    tab.style.backgroundSize = 'cover';
    card1.style.opacity = '0';
    }
    
    function restoreBackground2() {
        var tab = document.querySelector('.tab.tab2');
        var card1 = document.querySelector('.card.card1');
        tab.style.background = originalBackground;  
        card1.style.opacity = '1';
    }