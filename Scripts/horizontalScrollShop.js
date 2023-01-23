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