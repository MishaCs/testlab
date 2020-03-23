
$(function(){
  //шапка при скроле
  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 0){
    $('.header-top').addClass('header-top-active');
    } else{
    $('.header-top').removeClass('header-top-active');
    }
  });

  //табы на мобильной версии
  $(function() {
    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });


  //скрыть текст на мобильной версии
  document.getElementById('hamburger').onclick = function() {
    document.getElementById('hamburger').classList.toggle('hamburger-active');
    document.getElementById('header-menu').classList.toggle('header-menu-active');
  }

  document.getElementById('button-hide-1').onclick = function() {
    document.getElementById('about-list-1').classList.toggle('active');
  }
  document.getElementById('button-hide-2').onclick = function() {
    document.getElementById('about-list-2').classList.toggle('active');
  }
  document.getElementById('button-hide-3').onclick = function() {
    document.getElementById('about-list-3').classList.toggle('active');
  }

  //slick-slider
  $('.about__slider').slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    prevArrow: '<div class="about-slider-arrows about-slider-arrows-left"><img src="img/images/arrow.png" alt=""></div>',
    nextArrow: '<div class="about-slider-arrows about-slider-arrows-right"><img src="img/images/arrow.png" alt=""></div>'
  });


  //счетчик слайдеров
  $(".about__slider").on('afterChange', function(event, slick, currentSlide){
    $("#sc").text(currentSlide + 1);
  });

});

