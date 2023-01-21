
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


// // Navigation 

// const hamburger = document.getElementById('hamburger')
// const close = document.getElementById('close')

// const check = () => {
//     console.log('click');
// }


// hamburger.addEventListener('click', check)



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



btn.addEventListener('click', showNav)


