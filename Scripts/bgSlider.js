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