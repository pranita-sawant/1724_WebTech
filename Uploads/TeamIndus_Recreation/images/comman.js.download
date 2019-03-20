jQuery(function($){
//$('.menu-item-has-children > a').appendTo('.dropdown');

$(".menu-item-has-children").each(function(){
  $(this).find('.dropdown .dropdown-container').prepend($(this).find(' > a').addClass('dropdown-button'));
});

function mobileMenu(){
  var checkWidth = $(window).width();
  if(checkWidth > 768){
    $('.header .nav').removeClass('sliding-panel-content');
    $(".js-menu .dropdown").removeClass('onClick').addClass('onHover');
  } else if (checkWidth < 769){
    $('.header .nav').addClass('sliding-panel-content');
    $(".js-menu .dropdown").removeClass('onHover').addClass('onClick');
    if($('.dropdown .dropdown-menu').hasClass('show-menu')){
      $('.dropdown .dropdown-menu').parents('.nav.right').find('li').not('.show-menu li').addClass('gray');
    }else{
      $('.dropdown .dropdown-menu').parents('.nav.right').find('li').not('.show-menu li').removeClass('gray');
    }
  }
}
$(document).ready(mobileMenu);
$(window).resize(mobileMenu);

function mobile() {
  var ViewPortwidth = $(window).width();
  if(ViewPortwidth > 768){
    $('#featuredCarousel').trigger('destroy.owl.carousel');
    $('#featuredCarousel').removeClass('owl-carousel');
  }else if(ViewPortwidth < 769){
    $('#featuredCarousel').addClass('owl-carousel');
    $('#featuredCarousel').owlCarousel({
      center:true,
      items:1.5,
      loop:true,
      margin:40,
      nav:false,
      dots:false,
      autoWidth:true
    });
  }
}

(function stonesLoop() {
  $('.stones').animate({
    'background-position-x': '-=102'
  }, 350, 'linear', stonesLoop);
}());

(function foregroundLoop() {
  $('.foreground').animate({
    'background-position-x': '-=102'
  }, 650, 'linear', foregroundLoop);
}());

(function backgroundLoop() {
  $('.background').animate({
    'background-position-x': '-=102'
  }, 850, 'linear', backgroundLoop);
}());

$(document).ready(mobile);
$(window).resize(mobile);

$(document).ready(function(){

  AOS.init();

  $("#scroller").simplyScroll({
    frameRate: 52,
    speed: 3
  });

  $("#scroller .message-card .para").dotdotdot({
    //  configuration goes here
    height: 126,
    // fallbackToLetter: true,
    watch: true,
  });

  $('.testimonials-slider').owlCarousel({
      // animateOut: 'fadeOutLeft',
      // animateIn: 'fadeInright',
      loop:true,
      // rewind: true,
      center:true,
      items:1,
      margin:10,
      nav:true,
      navText:[
      '<svg class="icon icon-blue-plus"><use xlink:href="'+common_js.theme_dir+'/images/svg/icons.svg#icon-left-round"></use></svg>',
      '<svg class="icon icon-blue-plus"><use xlink:href="'+common_js.theme_dir+'/images/svg/icons.svg#icon-right-round"></use></svg>'
      ],
      dots:false,
      responsiveClass:true,
      responsive:{
       0:{
        items:1.2,
        nav:false,
        center:true
      },
      600:{
        items:1,
        nav:true
      },
    }
  });
//   $('.auto-slider').owlCarousel({
//     loop:false,
//     rewind: true,
//     margin:24,
//     autoplay:true,
//     autoplaySpeed:1000,
//     autoHeight:true,
//     // autoplayTimeout:0,
//     // fluidSpeed: true,
//     // smartSpeed: 2000,
//     // autoplayHoverPause:true,
//     // animateOut: 'slideOutRight',
//     animateIn: 'slideInLeft',
//     dots:false,
//     responsiveClass:true,
//     responsive:{
//      0:{
//       items:1,
//       nav:false,
//       center:true,
//     },
//     600:{
//      items:3,
//      nav:false
//    },
//    1200:{
//      items:5,
//      nav:false,
//      loop:true
//    }
//  }
// });

// Mobile menu trigger
$('.sliding-panel-button,.sliding-panel-fade-screen,.sliding-panel-close').on('click touchstart',function (e) {
  $('.sliding-panel-content,.sliding-panel-fade-screen').toggleClass('is-visible');
  $('.sliding-panel-content,.sliding-panel-fade-screen').parents('body').toggleClass('overflow-none');
  e.preventDefault();
});

  $("#scroller .message-card .para").dotdotdot({
    //  configuration goes here
    height: 126,
    fallbackToLetter: false,
    watch: true,
  });

  // $(document).on('click', function(e){
  //   var target = e.target;
  //   console.log(target);
  //   if($(target).is(!$(".dropdown"))){
  //     $('.dropdown .dropdown-menu').removeClass("show-menu");
  //     $('.dropdown.onHover .dropdown-menu').slideUp('medium');
  //   }
  // })

  $(".dropdown.dropdown-select .dropdown-container").on('click', '.dropdown-button', function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu");
      $button.html($(this).html());
    });
  });

  $(".dropdown.onClick .dropdown-container").on('click', '.dropdown-button', function() {
    var $button, $menu;
    $button = $(this);
    $menu = $button.siblings(".dropdown-menu");
    $menu.slideToggle("medium").toggleClass("show-menu");
    $menu.children("li").click(function() {
      $menu.removeClass("show-menu").slideUp("medium");
    });
    if($('.js-menu .dropdown .dropdown-menu').hasClass('show-menu')){
      $('.js-menu .dropdown .dropdown-menu').parents('.nav.right').find('li').not('.show-menu li').addClass('gray');
    }else{
      $('.js-menu .dropdown .dropdown-menu').parents('.nav.right').find('li').not('.show-menu li').removeClass('gray');
    }
  });



  $(".dropdown.onHover").hover(function(){
      var $button, $menu;
      $button = $(this);
      $menu = $button.find(".dropdown-menu");
      $menu.slideToggle("medium");
      $menu.children("li").click(function() {
        $menu.slideUp("medium");
      });
    }, function(){
      $('.dropdown-menu').hide();
  });

  // headroom for navigation sticky
  // $(".header").headroom();

  // parallax
  if ($("#js-parallax-window").length) {
    parallax();
  }

});

$(window).scroll(function(e) {
  if ($("#js-parallax-window").length) {
    parallax();
  }
});

function parallax(){
  if( $("#js-parallax-window").length > 0 ) {
    var plxBackground = $("#js-parallax-background");
    var plxWindow = $("#js-parallax-window");

    var plxWindowTopToPageTop = $(plxWindow).offset().top;
    var windowTopToPageTop = $(window).scrollTop();
    var plxWindowTopToWindowTop = plxWindowTopToPageTop - windowTopToPageTop;

    var plxBackgroundTopToPageTop = $(plxBackground).offset().top;
    var windowInnerHeight = window.innerHeight;
    var plxBackgroundTopToWindowTop = plxBackgroundTopToPageTop - windowTopToPageTop;
    var plxBackgroundTopToWindowBottom = windowInnerHeight - plxBackgroundTopToWindowTop;
    var plxSpeed = 0.35;

    plxBackground.css('top', - (plxWindowTopToWindowTop * plxSpeed) + 'px');
  }
}


function slider() {
  var $slider = $('#mission-tabs');
  var $current = $slider.find('.detail.hover');

  if(!$current.length) {
    var $next = $slider.find('.detail:first');
    if($.trim($($next).find('h3').text()) === "Build"){
          // console.log($.trim($($next).find('h3').text()));
          $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/build.gif');
        }
      } else {
        var $next = $current.next();
        $current.removeClass('hover');

        if($.trim($($next).find('h3').text()) === "Launch"){
          // console.log($.trim($($next).find('h3').text()));
          $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/launch.gif');
        }else if($.trim($($next).find('h3').text()) === "Land"){
          // console.log($.trim($($next).find('h3').text()));
          $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/land.gif');
        }else if($.trim($($next).find('h3').text()) === "Journey"){
          // console.log($.trim($($next).find('h3').text()));
          $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/journey.gif');
        }else{
          // console.log($.trim($($next).find('h3').text()));
          $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/explore.gif');
        }
      }

      if(!$next.length) {
        $next = $slider.find('.detail:first');

        if($.trim($($next).find('h3').text()) === "Build"){
          // console.log($.trim($($next).find('h3').text()));
          $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/build.gif');
        }
      }

      $next.addClass('hover');

    }

    $(function(){
      setInterval(function(){slider();}, 4000);

      $('.mission .mission-details .detail').on('click', function(){
      // console.log($(this));

      $('.mission .mission-details .detail').removeClass('hover');

      var $this = $(this).addClass('hover');

      if($.trim($($this).find('h3').text()) === "Build"){
        $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/build.gif');
      }else if($.trim($($this).find('h3').text()) === "Launch"){
        $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/launch.gif');
      }else if($.trim($($this).find('h3').text()) === "Journey"){
        $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/journey.gif');
      }else if($.trim($($this).find('h3').text()) === "Land"){
        $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/land.gif');
      }else{
        $('.mission .mission-box .rover img').show('fade').attr('src', common_js.theme_dir+'/'+'images/explore.gif');
      }
    })
    });

    $('.grid').masonry({
          // set itemSelector so .grid-sizer is not used in layout
          itemSelector: '.grid-item',
          // use element for option
          // columnWidth: '.grid-sizer',
          // columnWidth: 365,
          fitWidth: false,
          gutter: 20,
          // percentPosition: true
        })

    var lastTeamClickPos;

    $(document).on('click','.team-wrapper .team-member', function (e) {
      $('.team-member-details-wrapper .team-member-details').hide();
      $($(this).attr('href')).slideDown('slow');
      lastTeamClickPos = $(this).position().top;
    });

    $(document).on('click','.team-member-details-wrapper .team-member-details .close-icon', function (e) {
        //  console.log(('.team-wrapper .team-member[href*="#rahul-narayan"]').position().top);
        $(this).parents('.team-member-details').slideUp('slow');
        $('html,body').animate({
          scrollTop: lastTeamClickPos
        }, 1000, 'swing');
      });

    var memberArray = ["images/thumbnails/1.jpg", "images/thumbnails/2.jpg", "images/thumbnails/3.jpg","images/thumbnails/4.jpg", "images/thumbnails/5.jpg", "images/thumbnails/6.jpg","images/thumbnails/7.jpg", "images/thumbnails/8.jpg", "images/thumbnails/9.jpg","images/thumbnails/10.jpg","images/thumbnails/11.jpg", "images/thumbnails/12.jpg", "images/thumbnails/13.jpg","images/thumbnails/14.jpg","images/thumbnails/15.jpg", "images/thumbnails/16.jpg", "images/thumbnails/17.jpg","images/thumbnails/18.jpg","images/thumbnails/19.jpg", "images/thumbnails/20.jpg", "images/thumbnails/21.jpg","images/thumbnails/22.jpg", "images/thumbnails/23.jpg", "images/thumbnails/24.jpg","images/thumbnails/25.jpg","images/thumbnails/26.jpg", "images/thumbnails/27.jpg"];

    var memberActualCount = memberArray.length;
    var memberArrayCount = 0;
    var patternNo = 0;
    var blockCount = 0;

    for(var i = 0; i < memberActualCount; i++)
    {
      teampattern(patternNo,i);
    }

    $(window).resize(function(){
      patternNo = 0;
      blockCount = 0;
      $('.team-banner').empty();

      for(var i = 0; i < memberActualCount; i++)
      {
        teampattern(patternNo,i);
      }
    });

    setInterval(blinkingImage,2000);

    function blinkingImage()
    {
      var randomImgNo1 = Math.floor((Math.random() * memberActualCount) + 0);
      var randomImgNo2 = Math.floor((Math.random() * memberActualCount) + 0);

      $('.img-item .overlay').show();

      $('*[data-img="'+randomImgNo1+'"]').find('.overlay').fadeOut();
      $('*[data-img="'+randomImgNo2+'"]').find('.overlay').fadeOut();
    }

    function teampattern(patternType,memberInsertCount)
    {

      var number = 12;
      if($(window).width() < 768)
      {
        number = 6;
      }
      var squareSize = $(window).width() / number;

      if(patternType == 0)
      {
        if(memberArray[memberInsertCount])
        {
          if(blockCount == 2 || blockCount == 4)
          {
            $(".team-banner").append("<div class='grey' style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
          }
          else {
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
          }
          $(".team-banner").append("<div class='img-item' data-img='"+memberInsertCount+"' style='width:"+squareSize+"px;height:"+squareSize+"px'><img src='"+common_js.theme_dir+'/'+memberArray[memberInsertCount]+"'/><div class='overlay'></div></div>");
          memberArrayCount++;
          blockCount = blockCount + 2;
          if(blockCount == 12 && patternType == 0)
          {
            patternNo = 1;
            blockCount = 0;
          }
          else if (blockCount == 12 && patternType == 1) {
            patternNo = 2;
            blockCount = 0;
          }
          else if (blockCount == 1 && patternType == 2) {
            patternNo = 0;
            blockCount = 0;
          }
          else{

          }
        }


      }
      else if (patternType == 1) {
        if(memberArray[memberInsertCount])
        {
          $(".team-banner").append("<div class='img-item' data-img='"+memberInsertCount+"' style='width:"+squareSize+"px;height:"+squareSize+"px'><img src='"+common_js.theme_dir+'/'+memberArray[memberInsertCount]+"'/><div class='overlay'></div></div>");
          blockCount++;
          if(blockCount == 3)
          {
            $(".team-banner").append("<div class='grey' style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
          }
          else {
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
          }
          memberArrayCount++;
          blockCount++;
          if(blockCount == 12 && patternType == 0)
          {
            patternNo = 1;
            blockCount = 0;
          }
          else if (blockCount == 12 && patternType == 1) {
            patternNo = 2;
            blockCount = 0;
          }
          else if (blockCount == 2 && patternType == 2) {
            patternNo = 0;
            blockCount = 0;
          }
          else{

          }
        }
      }
      else {
        if(memberArray[memberInsertCount])
        {
          if(blockCount == 0)
          {
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div class='img-item' data-img='"+memberInsertCount+"' style='width:"+squareSize+"px;height:"+squareSize+"px'><img src='"+common_js.theme_dir+'/'+memberArray[memberInsertCount]+"'/><div class='overlay'></div></div>");
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div class='grey' style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
          }
          else if(blockCount == 1){
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div class='img-item' data-img='"+memberInsertCount+"' style='width:"+squareSize+"px;height:"+squareSize+"px'><img src='"+common_js.theme_dir+'/'+memberArray[memberInsertCount]+"'/><div class='overlay'></div></div>");
          }
          else{
            $(".team-banner").append("<div class='grey' style='width:"+squareSize+"px;height:"+squareSize+"px'></div>");
            $(".team-banner").append("<div class='img-item' data-img='"+memberInsertCount+"' style='width:"+squareSize+"px;height:"+squareSize+"px'><img src='"+common_js.theme_dir+'/'+memberArray[memberInsertCount]+"'/><div class='overlay'></div></div>");
          }
          memberArrayCount++;
          blockCount++;
          if(blockCount == 12 && patternType == 0)
          {
            patternNo = 1;
            blockCount = 0;
          }
          else if (blockCount == 12 && patternType == 1) {
            patternNo = 2;
            blockCount = 0;
          }
          else if (blockCount == 3 && patternType == 2) {
            patternNo = 0;
            blockCount = 0;
          }
          else{

          }
        }

      }

    }

    $(document).on('click','.contact-details .career-form .wpcf7 .large', function (e) {
      $('.contact-details .career-form .wpcf7 input[type="submit"]').trigger('click');
    });

  });
