const right_slider = document.getElementById('arrow-right')

if(right_slider){
        const slide = document.getElementsByClassName('slide');
        const slidePoint = document.getElementsByClassName('slidePoint');

        let index = 0;
          
        const sliderChanger = () => {
            for(let i = 0; i < slide.length; i++){
                slide[i].classList.remove('show');
                slidePoint[i].classList.remove('active');
            }

            slide[index].classList.add('show');
            slidePoint[index].classList.add('active');
        }

        for(let i = 0; i< slidePoint.length; i++) {
            const indexSeter = () => {
                index = i;
                sliderChanger()
            }


            slidePoint[i].addEventListener('click', indexSeter)
        }

        const left_slider = document.getElementById('arrow-left')

        const incrimantation = () => {
            if(index === 2) {
                index = 0;
                sliderChanger();
            } else {
                index++
                sliderChanger();
            }
        }

        const dec = () => {
            if(index === 0) {
                index = 2;
                sliderChanger();
            } else {
                index--
                sliderChanger();
            }
        }

        right_slider.addEventListener('click', incrimantation)
        left_slider.addEventListener('click', dec)

        setInterval(incrimantation, 5000);

}


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


// City Option in Home Page 

const selectTrigger = document.getElementById('select__trigger');

if(selectTrigger){
    const customOption = document.getElementById('custom-options');
    
    const showCustomOption = () =>{
        customOption.classList.toggle('showOption');
    }
    
    const options = document.querySelectorAll(".custom-option");
    options.forEach(option => {
        option.addEventListener("click", () => {
            if (!option.classList.contains("selected")) {
                const selectedOption = option.parentNode.querySelector(".custom-option.selected");
                selectedOption.classList.remove("selected");
                option.classList.add("selected");
                selectTrigger.textContent = option.textContent;
                showCustomOption();
            }
        });
    });

    selectTrigger.addEventListener('click', showCustomOption)


    
}

// sreach bar and sreach REsult function 

const sreachBar = document.getElementById('sreachBar');


if(sreachBar){
    const sreachResult = document.getElementById('sreachResult');
    const resultNum = document.getElementById('resultNum');
    const sreachCard =document.getElementsByClassName('sreachResult_card');
    
    resultNum.innerText = sreachCard.length
    
    
    const componentElements = document.querySelectorAll(".sreachResult_card");
    const nextSetBtn = document.getElementById("nextStep");
    const perSetBtn = document.getElementById("perStep");
    
    // Convert the HTML elements to an array of their data values
    const components = Array.from(componentElements);
    
    
    // Calculate the number of sets of 5 elements
    const numSets = Math.ceil(components.length / 5);
    
    // Initialize the starting set index to 0
    let currentSetIndex = 0;
    
    const hideAll = () => {
        for(let i = 0; i<components.length; i++){
            components[i].style.display = 'none';
        }
    }
    
    const setsOfFive = [];
    for (let i = 0; i < numSets; i++) {
      const start = i * 5;
      const end = start + 5;
      const set = components.slice(start, end);
      setsOfFive.push(set);
    }
    
    
    const showGroup = () => {
        hideAll();
        const showGroup = setsOfFive[currentSetIndex];
        for(let i= 0; i < showGroup.length; i++){
            showGroup[i].style.display = 'flex'
        }
    }
    
    nextSetBtn.addEventListener('click', () => {
        if(currentSetIndex < (setsOfFive.length -1 )){
            currentSetIndex++;
        }
        showGroup()
    })
    
    perSetBtn.addEventListener('click', () => {
        if(currentSetIndex > 0) {
            currentSetIndex--;
        }
        showGroup()
    })

    sreachBar.addEventListener('input', function(e) {
        const inputValue = e.target.value;
        const inputLength = inputValue.length;
        if(inputLength > 0){
            sreachResult.style.display = "block"
        } else{
            sreachResult.style.display = "none"
        }

        showGroup()
    })
}


// city page product sub sections 

const productShow = document.getElementById('products');

if(productShow){
    const productListBlock = document.getElementById('productListBlock');

    const toggleProductList = () => {
        if(productListBlock.style.display === 'flex'){
            productListBlock.style.display = 'none'
            productShow.style.color = '#000'
        } else {
            productListBlock.style.display = 'flex'
            productShow.style.color = '#FF2525'
        }
    }

    productShow.addEventListener('click', toggleProductList)
}


const catagoryBtn = document.getElementsByClassName('catagoryBtn');

if(catagoryBtn){
    const productLink = document.getElementsByClassName('productLinkGroup');
    
    for(let i = 0; i < catagoryBtn.length; i++){
        
        
        const showProductLink = () => {
            for(let e = 0; e < productLink.length; e++){
                productLink[e].classList.remove('showList');
                catagoryBtn[e].classList.remove('showCatagory');
            }
    
            productLink[i].classList.add('showList');
            catagoryBtn[i].classList.add('showCatagory');
    
        }
    
        catagoryBtn[i].addEventListener('click', showProductLink)
    }
}




// nav srach bar interaction 

const sb_icon_search = document.getElementById('sb-icon-search') ;

if(sb_icon_search){
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
}


// Read more and Read less Button for not on the home page 

const extraText = document.getElementById('extraText');

if(extraText) {
    const moreBtn = document.getElementById('moreBtn')
    const lessBtn = document.getElementById('lessBtn')
    
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
}


// more and less btn for mall and market detail page 

const extraText_marketDetailPage = document.getElementById('extraText_marketDetailPage');

if(extraText_marketDetailPage) {
    const moreBtn_marketDetailPage = document.getElementById('moreBtn_marketDetailPage')
    const lessBtn_marketDetailPage = document.getElementById('lessBtn_marketDetailPage')
    
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
}


// Horizontal scroll container

const horiContainer = document.getElementById('cardHorizontal_container')

if(horiContainer){
    const left = document.getElementById('cardHorizontal_arrow-left');
    const right = document.getElementById('cardHorizontal_arrow-right');
    
    
    const rightMove = () => {
        horiContainer.scrollLeft += 343;
    }
    const leftMove = () => {
        horiContainer.scrollLeft -= 343;
    }
    
    
    
    left.addEventListener('click', leftMove)
    right.addEventListener('click', rightMove)
}


// Horizontal shop scroll container 

const horiContainerShop = document.getElementById('cardHorizontal_container-shop')

if(horiContainerShop){
    const leftShop = document.getElementById('cardHorizontal_arrow-left-shop');
    const rightShop = document.getElementById('cardHorizontal_arrow-right-shop');
    
    const rightMoveShop = () => {
        horiContainerShop.scrollLeft += 343;
    }
    
    const leftMoveShop = () => {
        horiContainerShop.scrollLeft -= 343;
    }
    
    leftShop.addEventListener('click', leftMoveShop);
    rightShop.addEventListener('click', rightMoveShop);
}


// video tumbnail fucntion for video page 

const overLay1 = document.getElementsByClassName('overlay-productType')

if(overLay1){
    const playBtn = document.getElementsByClassName('playBtn');
    const video2 = document.getElementsByClassName('productType_video');
    
    for(let i=0; i< video2.length; i++){
        const playVideo = () => {
            overLay1[i].style.display = "none";
            video2[i].play();
            video2[i].setAttribute("controls", "true");
        }
    
        playBtn[i].addEventListener("click", playVideo);
    }
}

const data = document.querySelectorAll('.allvideo_wrapper .latest_video-container');

if(data){
    const options = document.querySelectorAll('.filterPageLink');
    
    options.forEach(option => {
        option.addEventListener('change', e => {
          const selectedOption = e.target.value;
          data.forEach(item => {
            if (item.classList.contains(selectedOption)) {
              item.style.display = 'block';
            } else {
              item.style.display = 'none';
            }
          });
        });
      });

}


// tending blog slider for blog page 

const trendingBlog_wrapper = document.getElementById('trendingBlog-wrapper');

if(trendingBlog_wrapper){
    const changeTrendingBlog = () => {
    
        if(trendingBlog_wrapper.scrollLeft + trendingBlog_wrapper.clientWidth === trendingBlog_wrapper.scrollWidth){
            trendingBlog_wrapper.scrollLeft = 0;
        } else {
            trendingBlog_wrapper.scrollLeft += 343;
        }
    
        setInterval(changeTrendingBlog, 5000);
    
    }
    
    window.addEventListener('load', changeTrendingBlog);
}


// video controls 
 
const video1 = document.getElementsByClassName('latest_video');

if(video1){
    const playBtn = document.getElementsByClassName('playBtn');
    const overLay = document.getElementsByClassName('overlay')
    
    
    for(let i=0; i< video1.length; i++){
        const playVideo = () => {
            overLay[i].style.display = "none";
            video1[i].play();
            video1[i].setAttribute("controls", "true");
        }
    
        playBtn[i].addEventListener("click", playVideo);
    }
}


// video control in videos page 

const videoClose = document.getElementById('videoClose');

if(videoClose){
    const videoThumb = document.getElementsByClassName('latest_video-container')
    const playBtn = document.getElementsByClassName('playBtn');
    const video = document.getElementsByClassName('videoPlayContainer')[0];
    
    for(let i = 0; i<videoThumb.length; i++){
        const playVideo = () => {
            video.style.display ="flex";
        }
    
        playBtn[i].addEventListener('click', playVideo)
    }
    
    const closeVideo = () => {
        video.style.display = 'none';
    }
    
    videoClose.addEventListener('click', closeVideo);
}


// staff detail functionality 

const advisorContainer = document.getElementById('advisorContainer')

if(advisorContainer){
    const staffDetail = document.getElementsByClassName('staffDetail');
    const ceo = document.getElementById('ceo');
    const founder = document.getElementById('founder');
    
    
    const staffList = () => {
        if(ceo.checked){
            founder.style.display = 'block'
            advisorContainer.style.display = 'none'
        } else {
            founder.style.display = 'none'
            advisorContainer.style.display = 'block'
        }
    }
    
    for (let i = 0; i < staffDetail.length; i++) {
        staffDetail[i].addEventListener('change', staffList)
    };
}

