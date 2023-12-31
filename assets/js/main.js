document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  const scroll_top = document.querySelector('.scroll-top');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 400 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');

      // window.scrollY > 400 ? scroll_top.classList.add('active') : scroll_top.classList.remove('active');

      // let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
      // height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
      // scrolled = (winScroll / height) * 100;
      // document.getElementById("progressBar").style.width = scrolled + "%";

    });
  }

  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function (event) {
    event.preventDefault();
    jQuery('html, body').animate({ scrollTop: 0 }, duration);
    return false;
  })

});

jQuery(document).ready(function ($) {
  let slider = $('.category-slider');
  slider.each(function () {
    $(this).owlCarousel({
      nav: false,
      loop: false,
      dots: false,
      pagination: false,
      margin: 10,
      autoHeight: false,
      stagePadding: 50,
      responsive: {
        0: {
          items: 1,
          stagePadding: 50,
          // margin: ,
        },
        767: {
          items: 2,
          stagePadding: 30,
        },
        1024: {
          items: 3,
        },
        1440: {
          items: 4,
        }
      }
    });
  });

  $('.featured-posts-slider').owlCarousel({
    items: 1,
    loop: true,
    margin: 5,
    nav: true,
    navText: ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      768: {
        items: 1,
        nav: true,
      }
    }
  })

  let states = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jammu and Kashmir",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttarakhand",
    "Uttar Pradesh",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry"
  ];

  states.map(function(state){
    if(state === 'Rajasthan'){
      jQuery("#state-list").append(`<li class="rounded mb-1 border">
            <label class="px-3 py-2 d-flex align-items-center justify-content-between">
                <input type="radio" class="d-none" name="state" value="${state}" checked="checked">
                ${state}
                <i class="bi bi-check2-circle"></i>
            </label>
        </li>`);
    }else{
      jQuery("#state-list").append(`<li class="rounded mb-1 border">
            <label class="px-3 py-2 d-flex align-items-center justify-content-between">
                <input type="radio" class="d-none" name="state" value="${state}">
                ${state}
                <i class="bi bi-check2-circle"></i>
            </label>
        </li>`);
    }
  })

  jQuery('input[name="state"]').on('change', function(){
    let active_state = jQuery('input[name="state"]:checked').val();
    jQuery('#filter_state').html(active_state+' <i class="bi bi-chevron-down"></i>');
  })

});