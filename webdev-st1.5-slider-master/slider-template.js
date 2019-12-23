const API_URL = 'https://picsum.photos/';
const BIG_SIZE = '600/400';
const SMALL_SIZE = '60';

const IMAGES = [
  '?image=1080', 
  '?image=1079', 
  '?image=1069', 
  '?image=1063', 
  '?image=1050',
  '?image=1039'
];

//upload photos
for (let i in  IMAGES){
  $('.slider-previews').append(
    `<li>
        <img src="${API_URL}${SMALL_SIZE}${IMAGES[i]}"
             idImage="${IMAGES[i]}" imageValue="${i}">
      </li>`
  );
};
  
let currentImageAttr,
    currentImageValue = $('li img').attr('imageValue');

//switching photos on click
$("li img").click(function () {
  currentImageAttr = $(this).attr('idImage');
  changeTheImage(currentImageAttr);
});

//switching photos with keys
$(window).keyup(event, () => {
  const leftButton = 37,
        rightButton = 39;

  if (event.which == leftButton) {
    if (currentImageValue <= 0) {
      currentImageValue = 6;
    }
      currentImageValue--;
      currentImageAttr = IMAGES[currentImageValue];
  } else if (event.which == rightButton) {
    if (currentImageValue >= 5) {
      currentImageValue = -1;
    }
    currentImageValue++;
    currentImageAttr = IMAGES[currentImageValue];
    }
    changeTheImage(currentImageAttr);

});

function changeTheImage(currentImageAttr) {
  //remove classes which added before
  $('.current').removeClass('current');

  //add class for the current preview image selected by user
  $(`img[idImage="${currentImageAttr}"]`).parent().addClass('current'); 

  //change the image to the selected image by the user
  $('.slider-current img').attr("src",`${API_URL}${BIG_SIZE}/${currentImageAttr}`);
};


