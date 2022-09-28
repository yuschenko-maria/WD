let headerMenu = document.querySelector('.header__menu');
let headerBurger = document.querySelector('.header__burger');
let burgerArrow = document.querySelector('.burger__arrow');
let burgerLi = document.querySelector('.burger__li');

headerBurger.addEventListener('click', function() {
    headerMenu.style.display = 'block';
    burgerLi.style.display = 'block';
})

burgerArrow.addEventListener('click', function() {
    headerMenu.style.display = 'none';
    burgerLi.style.display = 'none';
});

let formTitleWrapper = document.querySelector('.formTitle__wrapper');
let servicesForm = document.querySelector('.services__form');
let servicesArrow = document.querySelector('.services__arrow');

formTitleWrapper.addEventListener('click', function(){
    (servicesForm.style.display === 'grid') ? servicesForm.style.display = 'none' : servicesForm.style.display = 'grid';
    (servicesArrow.style.transform === 'rotate(135deg)') ? servicesArrow.style.transform = 'rotate(-45deg)' : servicesArrow.style.transform = 'rotate(135deg)';
});


const reviewFull = document.querySelectorAll('.review__full');
let dots = document.querySelectorAll('.dots');
let hiddenText = document.querySelectorAll('.hidden__text');
let reviewHide = document.querySelectorAll('.review__hide');

for (let i = 0; i < reviewFull.length; i++) {
    reviewFull[i].addEventListener('click', function(){
        dots[i].style.display = 'none';
        hiddenText[i].style.display = 'inline-block'
        reviewHide[i].style.display = 'block'
        reviewFull[i].style.display = 'none';
    })
}
for (let i = 0; i < reviewHide.length; i++) {
    reviewHide[i].addEventListener('click', function(){
        hiddenText[i].style.display = 'none';
        dots[i].style.display = 'inline-block'
        reviewFull[i].style.display = 'block'
        reviewHide[i].style.display = 'none';
    })
}

let hour = 5;
let minute = 37;
let sec = 25;

window.onload = function () {
    setInterval(function () { 
        minute = minute.toString().length < 2 ? "0" + minute : minute;
        sec = sec.toString().length < 2 ? "0" + sec : sec;
        hour = hour.toString().length < 2  ? "0" + hour : hour;

        document.getElementById("timer").innerHTML =
           `${hour}:${minute}:${sec}`;
        sec-=1;
        if (sec == 00) {
           minute-=1;
           sec = 59;
            if (minute == 00) {
                minute = 59;
                hour-=1
                if (hour == 0){
                    sec-=1
                    hour = 23
                }
            }
        }
    }, 1000);
 };

 
 