//자주 하는 질문
$(function () {
  $(".que").click(function () {
    $(this).next(".anw").stop().slideToggle(300);
    $(this).toggleClass("on").siblings().removeClass("on");
    $(this).next(".anw").siblings(".anw").slideUp(300);
  });

  //카테고리 탭메뉴 슬라이드
  $(".category .desc .swiper").css("display", "none");
  $(".category .desc .swiper:first").css("display", "block");
  $(".bottom ul li").click(function () {
    let i = $(this).index();
    console.log(i);
    $(".category .desc .swiper").css("display", "none");
    $(".category .desc .swiper").eq(i).css("display", "block");
    $("section .category .bottom .txt li").removeClass("on");
    $("section .category .bottom .txt li").eq(i).addClass("on");
  });

  //오디오북 탭메뉴 슬라이드
  $(".audiobook .bottom ").css("display", "none");
  $(".audiobook .bottom:first").css("display", "block");
  $(".audiobook .top li").click(function () {
    let i = $(this).index();
    console.log(i);
    $(".audiobook .bottom").css("display", "none");
    $(".audiobook .bottom").eq(i).css("display", "block");
    $(".audiobook .top li").removeClass("on");
    $(".audiobook .top li").eq(i).addClass("on");
  });
  //바텀 오디오북 슬라이드
  $(".audiobook .tabtxt").css("display", "none");
  $(".audiobook .tabtxt:first").css("display", "block");
  $(".audiobook .right .phone ul li").css("display", "none");
  $(".audiobook .right .phone ul li:first").eq(0).css("display", "block");
  $(".audiobook .left .middle .tabbtn").click(function () {
    let i = $(this).index();
    $(".audiobook .tabtxt").css("display", "none");
    $(".audiobook .tabtxt").eq(i).css("display", "block");
    $(".audiobook .right .phone ul li").css("display", "none");
    $(".audiobook .right .phone ul li").eq(i).css("display", "block");
    $(".audiobook .left .middle .tabbtn").removeClass("on");
    $(".audiobook .left .middle .tabbtn").eq(i).addClass("on");
  });
  //바텀 밀리뷰어 슬라이드
  $(".audiobook .tabtxt1").css("display", "none");
  $(".audiobook .tabtxt1:first").css("display", "block");
  $(".audiobook .right .phone1 ul li").css("display", "none");
  $(".audiobook .right .phone1 ul li:first").eq(0).css("display", "block");
  $(".audiobook .left .middle1 .tabbtn1").click(function () {
    let i = $(this).index();
    $(".audiobook .tabtxt1").css("display", "none");
    $(".audiobook .tabtxt1").eq(i).css("display", "block");
    $(".audiobook .right .phone1 ul li").css("display", "none");
    $(".audiobook .right .phone1 ul li").eq(i).css("display", "block");
    $(".audiobook .left .middle1 .tabbtn1").removeClass("on");
    $(".audiobook .left .middle1 .tabbtn1").eq(i).addClass("on");
  });
  //메뉴바 클릭시
  let status = true;
  $(".menubar").click(function () {
    if (status) {
      $("header .bar1").addClass("on");
      $("header .bar2").addClass("on");
      $("header .bar3").addClass("on");
      $(".top .nav").css("height", "300px");
    } else {
      $("header .bar1").removeClass("on");
      $("header .bar2").removeClass("on");
      $("header .bar3").removeClass("on");
      $(".top .nav").css("height", "0");
    }
    status = !status;
  });
});
