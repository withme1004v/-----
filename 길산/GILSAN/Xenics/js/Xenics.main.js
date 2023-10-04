$(function () {
  var swiper = new Swiper(".mySwiper", {
    autoplay: {
      // 자동 슬라이드 설정 , 비 활성화 시 false

      delay: 4000, // 시간 설정

      disableOnInteraction: false, // false로 설정하면 스와이프 후 자동 재생이 비활성화 되지 않음
    },
    speed: 500,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 두번째 슬라이드

  var swiper = new Swiper(".mySwiper2", {
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
      // pauseOnMouseEnter: true,
    },
    speed: 800,
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
  });
  // 스크롤 탑
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1000) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });
  $(".top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });
});
