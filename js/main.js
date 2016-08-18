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


