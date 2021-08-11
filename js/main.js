/*
document.addEventListener("DOMContentLoaded", function(event){
  const modal = document.querySelector('.modal');
  const modalBtn = document.querySelectorAll('[data-toggle=modal]');
  const closeBtn = document.querySelector('.modal__close');
  const switchModal = () =>{
    modal.classList.toggle('modal--visible');
  }

  modalBtn.forEach(element => {
    element.addEventListener('click', switchModal); 
  });
  closeBtn.addEventListener('click', switchModal);

});
*/

$(document).ready(function() {      
  var modal = $('.modal'),
      modalBtn = $('[data-toggle=modal]'),
      closeBtn = $('.modal__close');
  modalBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });
  closeBtn.on('click', function(){
    modal.toggleClass('modal--visible');
  });

  var mySwiper = new Swiper('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
  var next_projects = $('.projects .swiper-button-next');
  var prev_projects = $('.projects .swiper-button-prev');
  var bullets_projects = $('.projects .swiper-pagination');

  next_projects.css('left', prev_projects.width() + 20 + bullets_projects.width())
  bullets_projects.css('left', prev_projects.width() + 10 );

  var next_steps = $('.steps .swiper-button-next');
  var prev_steps = $('.steps .swiper-button-prev');
  var bullets_steps = $('.steps .swiper-pagination');

  next_steps.css('left', prev_steps.width() + 20 + bullets_steps.width())
  bullets_steps.css('left', prev_steps.width() + 10 )

  
}); 
$(document).on("click", ".swiper-button-next__steps", function(e) {
  var selectedItem = $('.swiper-steps__menu').find('.steps__menu__step-active') 
      firstItem = $('.swiper-steps__menu').find('.steps__menu__step-first'); 
      lastItem = $('.swiper-steps__menu').find('.steps__menu__step-last'); 
  if ((lastItem)==(selectedItem)){
    selectedItem.removeClass('steps__menu__step-active');
    firstItem.addClass('steps__menu__step-active');
  }else{
    selectedItem.removeClass('steps__menu__step-active');
    selectedItem.next().addClass('steps__menu__step-active');
  };
});
$(document).on("click", ".swiper-button-prev__steps", function(e) {
  var selectedItem = $('.swiper-steps__menu').find('.steps__menu__step-active') 
      firstItem = $('.swiper-steps__menu').find('.steps__menu__step-first'); 
      lastItem = $('.swiper-steps__menu').find('.steps__menu__step-last'); 
  if ((firstItem)==(selectedItem)){
    selectedItem.removeClass('steps__menu__step-active');
    lastItem.addClass('steps__menu__step-active');
  }else{
    selectedItem.removeClass('steps__menu__step-active');
    selectedItem.prev().addClass('steps__menu__step-active');
  };
});