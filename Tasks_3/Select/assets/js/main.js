const USERS = [
  { 
    name: 'House Arryn',
    image: 'Images/House_Arryn.png'
  },
  { 
    name: 'House Arryn',
    image: 'Images/House_Arryn.png'
  },
  { 
    name: 'House Arryn',
    image: 'Images/House_Arryn.png'
  },
  { 
    name: 'House Arryn',
    image: 'Images/House_Arryn.png'
  },
];

$('.list-group-item').each(function() {
    USERS.push($(this));
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
          $('#image').attr("src", this);          
        });
    };
  })( jQuery );
  $('selector').selectbox();
