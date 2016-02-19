$(document).ready(function(){
  $('body').fadeIn(1500)
    .removeClass('hidden')
});

$(window).one('scroll', function(){
    $('.home').css('background-image', 'url(../img/parallaxbg.jpg)');
});

$(window).one('scroll', function(){
    $('.top').fadeIn('slow', function(){

    });
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

