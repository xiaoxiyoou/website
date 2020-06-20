   // 顶部导航栏滑动
   $(document).ready(function () {
     var mySwiper = new Swiper('.swiper-container', {
       loop: true,
       autoplay: true,
       // 如果需要分页器
       pagination: {
         el: '.swiper-pagination',
       },

       // 如果需要前进后退按钮
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },

       // 如果需要滚动条
       scrollbar: {
         el: '.swiper-scrollbar',
       },
     })
     // 顶部特效
     $(".MenuIndex-title").mouseover(function () {
       $(this).addClass('MenuIndexHover')
     });

     $(".MenuIndex-title").mouseout(function () {
       $(this).removeClass('MenuIndexHover')
     });
     // 下拉特效
     $(".about-item").mouseover(function () {
       $(this).addClass('about-item-hover')
     });

     $(".about-item").mouseout(function () {
       $(this).removeClass('about-item-hover')
     });
     // 关于我们
     $(".about").mouseover(function () {
       $("#about").css('visibility', 'visible')
     })
     $(".about").mouseout(function () {
       $("#about").css('visibility', 'hidden')
     })
     $("#about").hover(
       function () {
         $(this).css("visibility", "visible");
       },
       function () {
         $(this).css("visibility", "hidden");
       }
     );
     // 解决方案
     $(".solution").mouseover(function () {
       $("#solution").css('visibility', 'visible')
     })
     $(".solution").mouseout(function () {
       $("#solution").css('visibility', 'hidden')
     })
     $("#solution").hover(
       function () {
         $(this).css("visibility", "visible");
       },
       function () {
         $(this).css("visibility", "hidden");
       }
     );
     // 顶部导航栏滑动
     $('body,html').animate({
       scrollTop: $('#title').offset().top - 122 + "px"
     }, 500);



   });