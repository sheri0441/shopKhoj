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