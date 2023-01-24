
const trendingBlog_wrapper = document.getElementById('trendingBlog-wrapper');


const changeTrendingBlog = () => {

    if(trendingBlog_wrapper.scrollLeft + trendingBlog_wrapper.clientWidth === trendingBlog_wrapper.scrollWidth){
        trendingBlog_wrapper.scrollLeft = 0;
    } else {
        trendingBlog_wrapper.scrollLeft += 343;
    }

    setInterval(changeTrendingBlog, 5000);

}

window.addEventListener('load', changeTrendingBlog)