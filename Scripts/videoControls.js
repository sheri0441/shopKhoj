const video = document.getElementsByClassName('latest_video');
const playBtn = document.getElementsByClassName('playBtn');
const overLay = document.getElementsByClassName('overlay')


for(let i=0; i< video.length; i++){
    const playVideo = () => {
        overLay[i].style.display = "none";
        video[i].play();
        video[i].setAttribute("controls", "true");
    }

    playBtn[i].addEventListener("click", playVideo);
}