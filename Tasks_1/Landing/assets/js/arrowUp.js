$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else { 
            $('#toTop').fadeOut(); 
        }
    });  
    $('#toTop').click(function() {  
        $('body,html').animate({scrollTop:0},800); 
        });  
});

$(document).ready(function(){
/*
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: offset}, 1000);
    });*/
    //if ($(window).scrollTop()  > $(window).height() / 2)
    let aboutUs = document.getElementById("aboutUs");
    let i = $(aboutUs).innerHeight()/2;
    console.log(i);
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        //var id  = $(this).attr('href'),
           // top = $(id).offset().top;
        $('body,html').animate({scrollTop: i}, 1000);
    });
});

