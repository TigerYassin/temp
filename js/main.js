/*global $, jQuery, alert*/

$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function(e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function() {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        $('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
        menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function() {
      window.location.hash = target.attr('id');
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function() {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //


  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 200 ) {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');
    } else {
      $("#main-nav").slideUp(700);
      $("#main-nav-subpage").hide();
      $("#main-nav-subpage").addClass('subpage-nav');
    }
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function(e) {
    $('.nav-menu').slideToggle();
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Will Said.", "Weightlifter.", "Developer."],
      typeSpeed: 50,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
      autoplay: true,
      loop: true,
      margin: 20,
      dots: true,
      nav: false,
      responsiveClass: true,
      responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
    });


  // ========================================================================= //
  //  Porfolio isotope and filter
  // ========================================================================= //

  $('#portfolio').imagesLoaded( function() {
      var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-thumbnail',
        layoutMode: 'fitRows'
      });

      $('#portfolio-flters li').on( 'click', function() {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');
        addDescription($(this).data('filter'));
        portfolioIsotope.isotope({ filter: $(this).data('filter') });
      });
  });




  function addDescription(type) {
      var text = document.getElementById('portfolio-description');

      if (type === '.all') {
          $("#see-more-details").show();
          text.textContent = '';
          addAppLink('#', '');
          hide(false);
      } else {
          $("#see-more-details").hide();
          if (type === '.branding') {
              //Foodie
              text.textContent = 'Foodie is the app I developed for my startup MealMe. Foodie is the ultimate app for food, bringing together reservations, deliveries, and reviews into one social network. Although all of the functionality works, the app is still undergoing massive design improvements and testing, and is not yet on the App Store.';
              addAppLink('https://www.mealmeapp.com', 'View Landing Page');
              hide();
          } else if (type === '.mockups') {
              //mideo
              text.textContent = 'Normally, iOS pauses your music whenever you take a video. Mideo gets around this restriction and lets you continue to listen to music while you record.';
              addAppLink('https://itunes.apple.com/us/app/mideo-video-listen-to-music/id1358135284?mt=8');
              hide();
          } else if (type === '.uikits') {
              //barbell
              text.textContent = 'Barbell Loader and Calculator is the ultimate app for weightlifters and powerlifters. It loads the bar while calculating conversions, rep maxes, sinclair and wilks coefficients, loadable percentages, and more, along with ample customization.';
              addAppLink('https://itunes.apple.com/US/app/id1322247393?mt=8')
              hide();
          }  else if (type === '.webdesign') {
              //phonics
              text.textContent = 'Brainy Phonics is an interactive children\'s game that improves childhood literacy rates in an engaging way. I was commissioned to upgrade Brainy Phonics for Dr Walter Evans, Professor Emeritus of English at Augusta University. ';
              hide(false);
              addAppLink('https://itunes.apple.com/in/app/brainy-phonics/id1121110521?mt=8');
          }  else if (type === '.photography') {
              //CodeMettle
              text.textContent = 'I work as an Associate Software Engineer CO-OP at CodeMettle, writing code for translators and solvers that connect devices throughout a Network Management System so that users can view the status of, and run polls on, all of their devices at any time in one place. Working at CodeMettle has refined my skills in Python and has given me great experience networking using Linux.';
              hide();
              addAppLink('http://www.codemettle.com', 'View Website');
          }
      }
  }

  function addAppLink(link, linkText='View On The App Store') {
      var text = document.getElementById('portfolio-app-store');
      text.href = link;
      text.target = '_blank';
      text.innerHTML = '<p>' + linkText + '</p>';
  }

  function hide(phonics = true) {
      if (phonics) {
          $("#phonics-landscape").hide();
      } else {
          $("#phonics-landscape").show();
      }
  }
});
