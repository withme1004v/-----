$(function () {
  let status = true;
  $(".menubar").click(function () {
    if (status) {
      $(".menu .bar1").addClass("on");
      $(".menu .bar2").addClass("on");
      $(".menu .bar3").addClass("on");
      $(".menu .nav").css("height", "250px");
    } else {
      $(".menu .bar1").removeClass("on");
      $(".menu .bar2").removeClass("on");
      $(".menu .bar3").removeClass("on");
      $(".menu .nav").css("height", "0");
    }
    status = !status;
  });
  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    on: {
      slideChange: function () {
        // Swiper 슬라이드가 변경될 때 메뉴 항목의 활성 상태를 업데이트
        $(".menu>ul li a").removeClass("on");

        if (this.realIndex == 3 || this.realIndex == 4) {
          // 해당 슬라이드와 연결된 메뉴 항목에 'active' 클래스 추가
          $(".menu>ul li").eq(2).find("a").addClass("on");
        } else if (this.realIndex == 5) {
          $(".menu>ul li").eq(3).find("a").addClass("on");
        } else {
          $(".menu>ul li").eq(this.realIndex).find("a").addClass("on");
        }
      },
    },
  });
  $(".menu>ul li a").on("click", function (e) {
    e.preventDefault();
    let i = $(this).parent().index();
    var target = $(this).attr("href");
    swiper.slideTo($(target).index());
    console.log(i);
    if (i == 3) {
      $(this).addClass("on");
    }
  });
});
