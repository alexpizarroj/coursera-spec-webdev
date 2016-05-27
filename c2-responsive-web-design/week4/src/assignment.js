var categoryListTemplate, categoryContentTemplate, specieDetailTemplate;

function showCategoryContent(id) {
  // Display the category's species
  var content = categoryContentTemplate(animals_data.category[id]);
  $('#category-content').html(content);
  
  // Initialize the masonry's grid layout
  var $grid = $('.grid');
  
  $grid.masonry({
    columnWidth: '.grid-sizer',
    itemSelector: '.grid-item',
    percentPosition: true
  });
  
  $grid.imagesLoaded().progress(function() {
    $grid.masonry('layout');
  });
  
  // Allow the user to click on the species' previews to show details
  $('.animal-specie').on('click', function(e) {
    e.preventDefault();
    
    var specieId = $(this).data('id');
    var specie = animals_data.category[id].animals[specieId];
    var content = specieDetailTemplate(specie);
    
    var myModal = $('#my-modal');
    myModal.find('.modal-title').text('Species: ' + specie.name);
    myModal.find('.modal-body').html(content);
    
    myModal.modal({
      keyboard: false,
      show: true
    });
  });
}

$(document).ready(function(){
  // Compile the templates
  var source   = $("#category-list-template").html();
  categoryListTemplate = Handlebars.compile(source);
  
  source   = $("#category-content-template").html();
  categoryContentTemplate = Handlebars.compile(source);
  
  source   = $("#specie-detail-template").html();
  specieDetailTemplate = Handlebars.compile(source);
  
  // Display the list of categories
  $('#animal-categories').html(categoryListTemplate(animals_data));
  
  // Update the gallery if the user clicks on a category
  $('.animal-category').on('click', function(e) {
    e.preventDefault();
    
    $('.animal-category-li').removeClass('active');
    $(this).parent().addClass('active');
    
    var id = $(this).data('id');
    showCategoryContent(id);
  });
  
  // Display the first category on the list
  $('li.active a.animal-category').click();
});
