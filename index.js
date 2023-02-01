let slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
showDivs(slideIndex += n);
}

function currentDiv(n) {
showDivs(slideIndex = n);
}

function showDivs(n) {
let i;
const x = document.getElementsByClassName("slide");
const dots = document.getElementsByClassName("slidePoint");
if (n > x.length) {slideIndex = 1}
if (n < 1) {slideIndex = x.length}
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
for (i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace("active", "");
}
x[slideIndex-1].style.display = "block";  
dots[slideIndex-1].className += " active";
}


const sliderChanger = () =>{
    setInterval(function () {
        plusDivs(1);
        sliderChanger;
    }, 5000)

} 


window.addEventListener('load', sliderChanger)




const header = document.getElementsByClassName("navBar");

const headerBg = () => {
    
    if (
        window.scrollY === 0
        ) {
            header[0].style.background = "transparent";
        } else {
            header[0].style.background = "#9597A1" ;
        }
}

window.addEventListener('scroll', headerBg);



// navigation 
const closeBtn = document.getElementById('menuClose');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

const hideMenu = () => {
    menu.style.display= 'none'
}

const showMenu = () => {
    menu.style.display= 'block'
}


hamburger.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)


// city nav bar botton 
const btn = document.getElementById('dropDown');
const cityNav = document.getElementById('dropDown_city');


const showNav =() => {
    if(cityNav.style.display === "none"){
        cityNav.style.display = "flex" 
    } else {
        cityNav.style.display = "none"
    }
}



btn.addEventListener('click', showNav);





// Read more and Read less Button for not on the home page 

const moreBtn = document.getElementById('moreBtn')
const lessBtn = document.getElementById('lessBtn')
const extraText = document.getElementById('extraText');

const showText = () => {
    moreBtn.style.display = "none";
    lessBtn.style.display = "inline";
    extraText.style.display = "inline";
}
const hideText = () => {
    moreBtn.style.display = "inline";
    lessBtn.style.display = "none";
    extraText.style.display = "none";
}


moreBtn.addEventListener('click', showText)
lessBtn.addEventListener('click', hideText)
