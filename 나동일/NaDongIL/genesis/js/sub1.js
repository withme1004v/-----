//사이드바
$(function () {
  let status = true;
  $(".menubar").click(function () {
    console.log(status);
    if (status) {
      $("#sidebar").css("top", "0");
      $(".menubar").css({ zIndex: "100" });
      $("header .bar1").addClass("on");
      $("header .bar2").addClass("on");
      $("body").css({ overflow: "hidden", height: "1130px" });
    } else {
      $("#sidebar").css("top", "-1500px");
      $(".menubar").css({ zIndex: "99" });
      $("header .bar1").removeClass("on");
      $("header .bar2").removeClass("on");
      $("body").css({ overflow: "visible", height: "auto" });
    }
    status = !status;
  });
});
//네비게이션 메뉴
$(function () {
  $(".submenu").css({ display: "none" });
  $(".menu ul li").click(function (e) {
    e.preventDefault();
    let i = $(this).index();
    if ($(this).find("a").hasClass("on")) {
      $(".submenu").stop().slideUp();
      $(".menu ul li a").removeClass("on");
    } else {
      $(".submenu").eq(i).siblings().css({ display: "none" });
      $(".submenu").eq(i).stop().slideDown();
      $(".menu ul li a").removeClass("on");
      $(".menu ul li").eq(i).find("a").addClass("on");
    }
  });
  //탭메뉴
  $(".tabcon img").css("opacity", "0");
  $(".tabcon img:first").css("opacity", "1");
  $(".txt2 p").css("opacity", "0");
  $(".txt2 p").eq(0).css("opacity", "1");
  $("section .innovative2 .desc .tabButton p").click(function () {
    let i = $(this).index();
    $(".innovative2 .tabcon img").css("opacity", "0");
    $(".innovative2 .tabcon img").eq(i).css("opacity", "1");
    $(".innovative2 .txt2 p").css("opacity", "0");
    $(".innovative2 .txt2 p").eq(i).css("opacity", "1");
    $("section .innovative2 .desc .tabButton p").removeClass("on");
    $("section .innovative2 .desc .tabButton p").eq(i).addClass("on");
  });
});
//아이콘 호버
$(".hov-anim").mouseover(function () {
  $(this).attr("src", $(this).data("animated"));
}),
  $(".hov-anim").mouseout(function () {
    $(this).attr("src", $(this).data("static"));
  });
