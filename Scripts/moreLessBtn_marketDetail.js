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