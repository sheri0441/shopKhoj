
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



// nav bar serach option 

// const icon = document.getElementById('sb-icon-search');
// const navSreahBar = document.getElementById('navSerachBar');

// console.log(icon);

// const openBar = () => {
//     console.log('working');
//     navSreahBar.style.display = "flex";
//     icon.style.display = "none"
// }

// icon.addEventListener('click', openBar);


