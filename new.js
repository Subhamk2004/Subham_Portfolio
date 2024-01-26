$(document).ready(function(){

    $(".war").hide(0);

let details = navigator.userAgent; 

let regexp = /android|iphone|kindle|ipad/i; 

let isMobileDevice = regexp.test(details); 

if (isMobileDevice) { 
    $(".war").show(500);
} else { 
	console.log("You are using Desktop"); 
}





    $('#main_nav').hide(0);
    $(".navimg").mouseenter(function(){
        $('#main_nav').slideDown(600);
    });
    $("#main_nav").mouseleave(function(){
        $('#main_nav').slideUp(300);
    });
    $("#appear2").hide(0);
    $('#home_front1').mouseenter(function(){
        $("#appear").slideUp(650,function(){
            $("#appear2").slideDown(650, function()
            {
                $("#appear2").slideUp(950,function(){
                    $("#appear").slideDown(650);
                });
            });
        });
    });
    
    
});