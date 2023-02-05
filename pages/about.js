const header = document.getElementsByClassName("navBar");
const header1 = document.getElementsByClassName("header-style");


const headerBg = () => {
    
    if (
        window.scrollY === 0
        ) {
            header[0].style.background = "transparent";
            header1[0].style.marginTop = "0px";
        } else {
            header[0].style.background = "#9597A1" ;
            header1[0].style.marginTop = "-30px" ;
        }
}

window.addEventListener('scroll', headerBg);


// navigation 
const closeBtn = document.getElementById('menuClose');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
const body = document.getElementsByTagName('body')[0]

const hideMenu = () => {
    menu.style.display= 'none'
    body.style.overflow = 'auto'
}

const showMenu = () => {
    menu.style.display= 'block'
    body.style.overflow = 'hidden'
}

hamburger.addEventListener('click', showMenu)
closeBtn.addEventListener('click', hideMenu)


// city nav bar botton 
const btn = document.getElementById('dropDown');
const cityNav = document.getElementById('dropDown_city');


const showNav =() => {
    if(cityNav.style.display === "flex"){
        cityNav.style.display = "none" 
    } else {
        cityNav.style.display = "flex"
    }
}



btn.addEventListener('click', showNav);


const left = document.getElementById('cardHorizontal_arrow-left');
const right = document.getElementById('cardHorizontal_arrow-right');
const horiContainer = document.getElementById('cardHorizontal_container')


const rightMove = () => {
    horiContainer.scrollLeft += 343;
}
const leftMove = () => {
    horiContainer.scrollLeft -= 343;
}



left.addEventListener('click', leftMove)
right.addEventListener('click', rightMove)