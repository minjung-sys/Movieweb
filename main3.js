'use strict';
const toggleBtn=document.querySelector('.navbar_toggleBtn');
const menu=document.querySelector('.Navbar_menu');
const icons=document.querySelector('.Navbar_icons');

toggleBtn.addEventListener('click',()=>{
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});
/*
$(document).ready(function(){
    $('.bxslider').bxSlider({
        auto:true,
        speed:500,
        pause:5000,
        mode:'horizontal',
        autoControls:true,
        pager:true
    });
});*/

new Swiper('.swiper-container',{

    slidesPerView:3, //동시에 보여줄 슬라이드 갯수
    spaceBetween:30, //슬라이드 간격
    slidesPerGroup: 3, //그룹으로 묶을 수, slidesPerView와 같은 값을 지정하는게 좋음

    direction:'horizontal',
    //그룹수가 맞지 않을 경우 빈칸으로 메우기
    //3개가 나와야 되는데 1개만 있다면 2개는 빈칸으로 채워서 3개를 만듬
    loopFillGroupWithBlank:true,
    loop:true,

    pagination:{ //페이징
        el : '.swiper-pagination',
        clickable=true, //페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해줘야 기능 작동
    },
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
});