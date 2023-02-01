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

// Read more and Read less Button for not on the home page 

const moreBtn = document.getElementById('moreBtn');
const lessBtn = document.getElementById('lessBtn');
const extraText = document.getElementById('extraText');

const showText = () => {
    moreBtn.style.display = "none";
    lessBtn.style.display = "inline";
    extraText.style.display = "inline";
    console.log('showText');
}
const hideText = () => {
    moreBtn.style.display = "inline";
    lessBtn.style.display = "none";
    extraText.style.display = "none";
}


moreBtn.addEventListener('click', showText);
lessBtn.addEventListener('click', hideText);

const leftShop = document.getElementById('cardHorizontal_arrow-left-shop');
const rightShop = document.getElementById('cardHorizontal_arrow-right-shop');
const horiContainerShop = document.getElementById('cardHorizontal_container-shop')


const rightMoveShop = () => {
    horiContainerShop.scrollLeft += 343;
}
const leftMoveShop = () => {
    horiContainerShop.scrollLeft -= 343;
}



leftShop.addEventListener('click', leftMoveShop);
rightShop.addEventListener('click', rightMoveShop);



const moreBtn_marketDetailPage = document.getElementById('moreBtn_marketDetailPage');
const lessBtn_marketDetailPage = document.getElementById('lessBtn_marketDetailPage');
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


moreBtn_marketDetailPage.addEventListener('click', showText_marketDetailPage);
lessBtn_marketDetailPage.addEventListener('click', hideText_marketDetailPage);

