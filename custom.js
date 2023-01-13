let navBar = document.querySelector('#container .navigation');
let menuBar = document.querySelector('#menu-bars');
let srchBtn= document.querySelector('.srch-btn');
let clossBtn = document.querySelector('#closs-btn');


menuBar.addEventListener('click',function(){
    navBar.classList.add('active');
});
clossBtn.addEventListener('click',function(){
    navBar.classList.remove('active');
});

srchBtn.addEventListener('click', function(){
    document.querySelector('.search-input').classList.toggle('active')
    document.querySelector('.search-bar').classList.toggle('active')
})



window.addEventListener('scroll',function(){

    navBar.classList.remove('active');


    if(window.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    
});


var swiper = new Swiper(".product-slider", {
    loop:true, 
    grabCursor:true,
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});