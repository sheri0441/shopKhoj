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