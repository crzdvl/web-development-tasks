$(function() {
    //scroll
    $('#menu').on('click','a', function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 500);
    });

    //arrow
    $(window).scroll(function() { 
        if($(this).scrollTop() != 0) {   
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();  
        }
    });  
        $('#toTop').click(function() {  
        $('body,html').animate({scrollTop:0},500); 
    }); 
});
