$(document).ready(function () {
  $(".war").hide(0);

  let details = navigator.userAgent;

  let regexp = /android|iphone|kindle|ipad/i;

  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
    $(".war").show(500);
  } else {
    console.log("You are using Desktop");
  }

  $("#main_nav").hide(0);
  $(".navimg").mouseenter(function () {
    $("#main_nav").slideDown(600);
  });
  $("#main_nav").mouseleave(function () {
    $("#main_nav").slideUp(300);
  });
  $("#appear2").hide(0);
  function recursee() {
    $("#appear").fadeOut(2000, function(){
        $("#appear2").fadeIn(2000, function(){
            $("#appear2").fadeOut(2000 , function(){
                $("#appear").fadeIn(2000)
            });
        });
    });
  };
  recursee();
  window.setInterval(recursee, 8000);
});