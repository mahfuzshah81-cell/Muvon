(function($) {
    "use strict";
  
    const $documentOn = $(document);
    const $windowOn = $(window);
  
    $documentOn.ready( function() {
  
      //>> Mobile Menu Js Start <<//
      $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "1199",
        meanExpand: ['<i class="far fa-plus"></i>'],
    });
  
    $('#mobile-menus').meanmenu({
        meanMenuContainer: '.mobile-menus',
        meanScreenWidth: "1920",
        meanExpand: ['<i class="far fa-plus"></i>'],
      });
      
      //>> Sidebar Toggle Js Start <<//
      $(".offcanvas__close,.offcanvas__overlay").on("click", function () {
        $(".offcanvas__info").removeClass("info-open");
        $(".offcanvas__overlay").removeClass("overlay-open");
      });
      $(".sidebar__toggle").on("click", function () {
        $(".offcanvas__info").addClass("info-open");
        $(".offcanvas__overlay").addClass("overlay-open");
      });
  
      //>> Body Overlay Js Start <<//
      $(".body-overlay").on("click", function () {
        $(".offcanvas__area").removeClass("offcanvas-opened");
        $(".df-search-area").removeClass("opened");
        $(".body-overlay").removeClass("opened");
      });
  
      /*----------------------- Whole Page Scrolling Animation -----------------------------*/



    /* ================================
     Back To Top Button Js Start
    ================================ */

  // Function to toggle back-to-top button visibility
    function toggleBackTop() {
        if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
            $("#back-top").addClass("show");
        } else {
            $("#back-top").removeClass("show");
        }
    }

    // On scroll
    $windowOn.on('scroll', function() {
        toggleBackTop();
    });

    // On document ready, force hide the button
    $(document).ready(function() {
        $("#back-top").removeClass("show");
    });

    // On click
    $documentOn.on('click', '#back-top', function() {
        $('html, body').animate({ scrollTop: 0 }, 800);
        return false;
    });



      //>> Sticky Header Js Start <<//
  
      $windowOn.on("scroll", function () {
        if ($(this).scrollTop() > 250) {
          $("#header-sticky").addClass("sticky");
        } else {
          $("#header-sticky").removeClass("sticky");
        }
      });      
      
      //>> Video Popup Start <<//
      $(".img-popup").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });

       $(".img-popup2").magnificPopup({
        type: "image",
        gallery: {
          enabled: true,
        },
      });
  
      $(".video-popup").magnificPopup({
        type: "iframe",
        callbacks: {},
      });
  
      //>> Counterup Start <<//
      $(".count").counterUp({
        delay: 15,
        time: 4000,
      });
  
      //>> Wow Animation Start <<//
      new WOW().init();
  
      //>> Nice Select Start <<//
        if ($('.single-select').length) {
          $('.single-select').niceSelect();
      }


    /* ================================
       Brand Slider Js Start
    ================================ */
    if($('.brand-slider').length > 0) {
        const BrandSlider = new Swiper(".brand-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
            breakpoints: {
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 3,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }

    
    //>> testimonial-Slider Select Start <<//
     if($('.testimonial-slider').length > 0) {
        const TestimonialSlider = new Swiper(".testimonial-slider", {
            spaceBetween: 30,
            speed: 1300,
            loop: true,
            autoplay: {
                delay: 2000,
                disableOnInteraction: false,
            },
             navigation: {
              nextEl: ".array-prev",
              prevEl: ".array-next",
          },
            breakpoints: {
                1199: {
                    slidesPerView: 1,
                },
                991: {
                    slidesPerView: 1,
                },
                767: {
                    slidesPerView: 1,
                },
                575: {
                    slidesPerView: 1,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }
   
    //>> Trainer Hover Js Start <<//
    const getSlide = $('.main-box, .box-2').length - 1;
    const slideCal = 100 / getSlide + '%';
    
    $('.box-2').css({
        "width": slideCal
    });
    
    $(document).on('mouseenter', '.box-2', function() {
        $('.box-2').removeClass('active');
        $(this).addClass('active');
    });  

      /* ================================
       Custom Accordion Js Start
    ================================ */
    $(".accordion-single .header-area").on("click", function () {
        if ($(this).closest(".accordion-single").hasClass("active")) {
            $(this).closest(".accordion-single").removeClass("active");
            $(this).next(".content-area").slideUp();
        } else {
            $(".accordion-single").removeClass("active");
            $(this).closest(".accordion-single").addClass("active");
            $(".content-area").not($(this).next(".content-area")).slideUp();
            $(this).next(".content-area").slideToggle();
        }
    });

    }); // End Document Ready Function


    //>> Search Start <<//
     if ($(".search-toggler").length) {
        $(".search-toggler").on("click", function(e) {
            e.preventDefault();
            $(".search-popup").toggleClass("active");
            $("body").toggleClass("locked");
        });
    }

    //>> MouseCursor Start <<//
    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n,
                        i = 0,
                        o = !1;
                    (window.onmousemove = function(s) {
                        o ||
                            (t.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (e.style.transform =
                                "translate(" + s.clientX + "px, " + s.clientY + "px)"),
                            (n = s.clientY),
                            (i = s.clientX);
                    }),
                    $("body").on(
                            "mouseenter",
                            "button, a, .cursor-pointer",
                            function() {
                                e.classList.add("cursor-hover"),
                                    t.classList.add("cursor-hover");
                            }
                        ),
                        $("body").on(
                            "mouseleave",
                            "button, a, .cursor-pointer",
                            function() {
                                ($(this).is("a", "button") &&
                                    $(this).closest(".cursor-pointer").length) ||
                                (e.classList.remove("cursor-hover"),
                                    t.classList.remove("cursor-hover"));
                            }
                        ),
                        (e.style.visibility = "visible"),
                        (t.style.visibility = "visible");
                }
            }
        }
        itCursor();
    }

    
    function loader() {
        $windowOn.on('load', function() {
            // Animate loader off screen
            $(".preloader").addClass('loaded');
            $(".preloader").delay(200).fadeOut();
        });
    }
    
    loader();

  })(jQuery); // End jQuery