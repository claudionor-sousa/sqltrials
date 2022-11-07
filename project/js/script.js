// Filtro portfólio

$('.filter-btn').on('click', function() {

  let type = $(this).attr('id');
  let boxes = $('.project-box');

  $('.main-btn').removeClass('active');
  $(this).addClass('active');

  if(type == 'front-btn') {
    eachBoxes('front', boxes);
  } else if(type == 'back-btn') {
    eachBoxes('back', boxes);
  } else if(type == 'prot-btn') {
    eachBoxes('prot', boxes);
  }else if(type == 'doc-btn') {
    eachBoxes('doc', boxes);
  } else {
    eachBoxes('all', boxes);
  }

});

function eachBoxes(type, boxes) {

  if(type == 'all') {
    $(boxes).fadeIn();
  } else {
    $(boxes).each(function() {
      if(!$(this).hasClass(type)) {
        $(this).fadeOut('slow');
      } else {
        $(this).fadeIn();
      }
    });
  }
}