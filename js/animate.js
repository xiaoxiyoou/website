$(window).scroll(function () {
    
    // if ($(this).scrollTop() > 1160) {
    //   $(".mideg-title").addClass("slideInUp")
    //   $(".mid-title").addClass("slideInUp")
    //   $(".name").addClass("slideInUp")
    //   $(".des").addClass("slideInUp")
    // }


  });
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
  });
  wow.init();