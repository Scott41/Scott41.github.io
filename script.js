$(document).ready(function(){
    $('.downarrow').addClass('arrowanim');
    $('.downarrow').mouseenter(function(){
        $('.downarrow').css("-webkit-transition","all .25s ease-in-out");
        $('.downarrow').css("-moz-transition","all .25s ease-in-out");
        $('.downarrow').css("-o-transition","all .25s ease-in-out");
        $('.downarrow').css("transition","all .25s ease-in-out");
      });
    $('.frontbar').css("opacity","1")



    /*$('.frontbar').hover(function() {
    $(this).fadeTo(1,1);
    },function() {
    $(this).fadeTo(1,0);
    });*/

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



})