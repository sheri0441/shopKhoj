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

const leftShop = document.getElementById('cardHorizontal_arrow-left-shop');
const rightShop = document.getElementById('cardHorizontal_arrow-right-shop');
const horiContainerShop = document.getElementById('cardHorizontal_container-shop')


const rightMoveShop = () => {
    horiContainerShop.scrollLeft += 343;
}
const leftMoveShop = () => {
    horiContainerShop.scrollLeft -= 343;
}



leftShop.addEventListener('click', leftMoveShop)
rightShop.addEventListener('click', rightMoveShop)

// nav srach bar interaction 

const sb_icon_search = document.getElementById('sb-icon-search') ;
const navSerachBar = document.getElementById('navSerachBar');

const toggleTheNavSraechBar = () => {
    if (navSerachBar.style.display === 'flex') {
        navSerachBar.style.display = 'none'
    }  else {
        navSerachBar.style.display = 'flex'
    }
}

sb_icon_search.addEventListener('click', toggleTheNavSraechBar)


const checkTheSreachNav = () => {
    
    if (window.innerWidth >= 1220 ){
        if(navSerachBar.style.display === 'none'){
            navSerachBar.style.display = 'flex';
        }
    }
}

window.addEventListener('resize', checkTheSreachNav);

// back to top botton 

const back_to_top = document.getElementsByClassName('back-to-top')[0];

const checkBackToTop = () => {
    if( window.scrollY >= 875){
        back_to_top.style.display = "flex"
    } else {
        back_to_top.style.display = "none"

    }
}

window.addEventListener('scroll', checkBackToTop)