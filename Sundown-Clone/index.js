
// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function(){
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function(){
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e){
        e.addEventListener("mouseenter", function(){
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        loop: true,
        freemode: true,
autoplay: {
  delay: 1,
  disableOnInteraction: true
},speed: 4000,
// scrollbar: {
//     el: ".swiper-scrollbar",
//   },
// mousewheel: true,
grabCursor: true,
clickable: true,

    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var load = document.querySelector("#loader")
    setTimeout(function () {
        load.style.top = "-100%"
    }, 4200)
}

swiperAnimation()
page4Animation()
loaderAnimation()
menuAnimation()
