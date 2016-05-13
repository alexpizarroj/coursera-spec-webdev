const nPictures = 5;
var currentPic = 1;

$(document).ready(function () {

  function setCurrentPicture(index) {
    if (index < 1 || index > nPictures) {
      console.error("setCurrentPicture 'index' parameter out of range.");
    }

    currentPic = index;

    var imgUrl = './img/' + index + '.jpg';
    $('#picture').addClass('img-blur');
    $('#picture').attr('src', imgUrl);

    $('#picture').on('load', function() {
      $('#picture').removeClass('img-blur');
    });
  }

  setCurrentPicture(currentPic);

  $('#btnBack').on('click', function() {
    var previousPic = currentPic - 1;
    if (previousPic < 1) {
      previousPic = nPictures;
    }
    setCurrentPicture(previousPic);
  });

  $('#btnNext').on('click', function() {
    var nextPic = currentPic + 1;
    if (nextPic > nPictures) {
      nextPic = 1;
    }
    setCurrentPicture(nextPic);
  });

});
