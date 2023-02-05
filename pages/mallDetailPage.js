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

const moreBtn_marketDetailPage = document.getElementById('moreBtn_marketDetailPage')
const lessBtn_marketDetailPage = document.getElementById('lessBtn_marketDetailPage')
const extraText_marketDetailPage = document.getElementById('extraText_marketDetailPage');

const showText_marketDetailPage = () => {
    moreBtn_marketDetailPage.style.display = "none";
    lessBtn_marketDetailPage.style.display = "inline";
    extraText_marketDetailPage.style.display = "inline";
}
const hideText_marketDetailPage = () => {
    moreBtn_marketDetailPage.style.display = "inline";
    lessBtn_marketDetailPage.style.display = "none";
    extraText_marketDetailPage.style.display = "none";
}


moreBtn_marketDetailPage.addEventListener('click', showText_marketDetailPage)
lessBtn_marketDetailPage.addEventListener('click', hideText_marketDetailPage)