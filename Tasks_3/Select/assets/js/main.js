const USERS = [
  { 
    name: 'Melissa Monoban',
    image: 'assets/img/Mellissa_Monoban.png'
  },
  { 
    name: 'Christian',
    image: 'assets/img/Christian.png'
  },
  { 
    name: 'Jenny Hess',
    image: 'assets/img/Jenny_Hess.png'
  },
  { 
    name: 'Matt',
    image: 'assets/img/Matt.png'
  },
  { name: 'Elliot Fu',
    image: 'assets/img/Elliot_Fu.png'
  }
];

$.each(USERS, function(){
  $( "#selectMenuBox" ).append( "<li class=option ><img src=" + this.image + " class='images' height='20px'/><p>" + this.name + "</p></li>" );
});

(function( $ ) {
    $.fn.selectbox = function() {
      
      var selectDefaultHeight = $('#selectBox').height();
      var rotateDefault = "rotate(0deg)";
     
          $('#selectBox > p.valueTag').click(function() {
            var currentHeight = $('#selectBox').height();
            if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
                $('#selectBox').height("250px"); 
                $('img.arrow').css({borderRadius: "1000px", transition: ".2s", transform: "rotate(180deg)"});
            }
  
            if (currentHeight >= 250) {
              $('#selectBox').height(selectDefaultHeight);
              $('img.arrow').css({transform: rotateDefault});
            }
        });
  
        $('li.option').click(function() {
          $('#selectBox').height(selectDefaultHeight);
         $('img.arrow').css({transform: rotateDefault});
          $('p.valueTag').text($(this).text()).addClass("selected");

          /*let z = $(this).find("img").attr('src');
          console.log(z);*/
          $('p.valueTag').prepend($("<img src=" + $(this).find("img").attr('src') + " class='images' height='20px'/>")) ;
        });
    };
 })( jQuery );

  $('selector').selectbox();