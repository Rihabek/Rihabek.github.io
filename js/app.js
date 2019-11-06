// A $( document ).ready() block.
$( document ).ready(function() {
  $("#cv").click(function(){
    $(this).css('color','#961108');
    return false;
  });
  $(this).closest(".dropdown").find(".dropdown-toggle").dropdown("toggle");


  $('.navbar-nav').click(function() {
    $('.navbar-collapse').collapse('hide');
  })

});
