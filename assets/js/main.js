(function($) {
  "use strict";
  
 // menu 
  $('.siteBar-btn').click( function (event){ 
    event.preventDefault()
    $(this).toggleClass('active');   
    $('.mobile-menu').toggleClass('siteBar');   
    $('body').toggleClass('overflow-hidden');   
  }); 


  var $el = $(".jobExploreList__filter");
  var $ee = $("body");
  $el.click(function(e){
    e.stopPropagation();
    $("body").toggleClass('filter');
  });
  $(document).on('click',function(e){
    if(($(e.target) != $el) && ($ee.hasClass('filter'))){
    $ee.removeClass('filter');
    // console.log("yes");
  }
  });


  
  // all Select 2 active

  $('.selectActive').select2();
  $('.filterSelect').select2();




  // page Animation
  // AOS.init({
  //   mirror: true,
  //   duration: 1500,
  //   initClassName: 'aos-init',
  //   once: true,
  // });

  // data-aos="fade-up" 
  // data-aos-delay="300" 

 
})(jQuery);
