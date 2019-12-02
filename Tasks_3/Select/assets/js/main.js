const USERS = [
  {
    name: 'Select Friend',
    image: 'assets/img/user.png'
  },
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

$(function() {
  $.each(USERS, function(){
    $('#selectMenuBox').append(
      `<li class='option'>
        <img src= ${this.image} class='images' height='20px'/>
        <p> ${this.name} </p>
      </li>`);
  });

  $.fn.selectbox = function() {
      
    const selectDefaultHeight = $('#selectBox').height();
    let countOfUsers = 0,
        heightOfLi = 50;

    $(document).mouseup(function (e) {
      $('#selectBox').height(selectDefaultHeight);
      $('img.arrow').removeClass('arrow-active');
    });

    for(let i = 0; i < USERS.length; ++i){
      countOfUsers++;
    }

    $('#selectBox > p.valueTag').click(function() {
      const currentHeight = $('#selectBox').height();
      if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
        $('#selectBox').height(heightOfLi * countOfUsers + 'px'); 
        $('img.arrow').addClass('arrow-active');
      }
      if (currentHeight >= selectDefaultHeight * countOfUsers) {
        $('#selectBox').height(selectDefaultHeight);
        $('img.arrow').removeClass('arrow-active');
      }
    });

    $('li.option').click(function() {
      $('#selectBox').height(selectDefaultHeight);
      $('img.arrow').addClass('arrow-active');
      $('p.valueTag').text($(this).text()).addClass('selected');
      $('p.valueTag').prepend($(`<img src= ${$(this).find('img').attr('src')} class='images' height='20px'/>`));
    });
  };

  $('selector').selectbox();
});




  
