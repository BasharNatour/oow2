$('.navbar-nav li a').click(function(){

    $(this).parent().addClass('active').siblings().removeClass('active');


})

// Smooth Scroll top div

$('.navbar-nav li a').click(function(){

   $('html, body').animate({


       scrollTop: $("#" + $(this).data('value')).offset().top


   } , 1000 );


});
