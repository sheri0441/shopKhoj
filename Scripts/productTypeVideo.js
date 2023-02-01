const playBtn = document.getElementsByClassName('playBtn');
const video = document.getElementsByClassName('productType_video');
const overLay = document.getElementsByClassName('overlay-productType')

for(let i=0; i< video.length; i++){
    const playVideo = () => {
        overLay[i].style.display = "none";
        video[i].play();
        video[i].setAttribute("controls", "true");
    }

    playBtn[i].addEventListener("click", playVideo);
}


