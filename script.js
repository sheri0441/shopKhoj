
// header bg changer 
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
    
window.addEventListener('scroll', headerBg)


// slider functional code

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

// Navigation 

const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')

const check = () => {
    console.log('click');
}


hamburger.addEventListener('click', check)