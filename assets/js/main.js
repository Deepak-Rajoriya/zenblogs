document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

});

jQuery(document).ready(function($){
  let slider = $('.owl-carousel');
  slider.each(function () {
    $(this).owlCarousel({
      nav: false,
      loop:false,
      dots: false,
      pagination: false,
      margin: 10,
      autoHeight: false,
      stagePadding: 50,
      responsive:{
        0:{
          items: 1,
          stagePadding: 50,
          // margin: ,
        },
        767:{
          items: 2,
          stagePadding: 30,
        },
        1024:{
          items: 3,
        },
        1440:{
          items: 4,
        }
      }
    });
  });
});