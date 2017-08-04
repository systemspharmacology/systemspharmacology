wow = new WOW(
  {
    animateClass: 'animated',
    offset:       100
  }
);
wow.init();

$(document).ready(function(e) {
  $('.res-nav_click').click(function(){
    $('ul.toggle').slideToggle(600)	
  });	
  
  $('ul.toggle a').click(function(){
    $('ul.toggle').slideToggle(600)	
  });	
  
  $(window).bind('scroll', function() {
    if ($(window).scrollTop() > 0) {
      $('.header').addClass('fixed');
    }
    else {
      $('.header').removeClass('fixed');
    }
  });
  
  
  $('#header').scrollToFixed();
  $('.res-nav_click').click(function(){
    $('.main-nav').slideToggle();
    return false    
    
  });
  
});	

$(window).load(function(){
  
  $('a').bind('click',function(event){
    var $anchor = $(this);
    
    var hrefOffset = $($anchor.attr('href')).offset();
    if(hrefOffset){
      $('html, body').stop().animate({
        scrollTop: hrefOffset.top - 91
      }, 1500,'easeInOutExpo');
    }
    event.preventDefault();
  });
})