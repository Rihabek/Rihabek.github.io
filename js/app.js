var elements = document.getElementById('menu').querySelectorAll('[data-link]')
for (var i = 0;  i < elements.length; i++) {
  elements[i].addEventListener('click', function (e) {
    e.preventDefault();
    var id = e.target.getAttribute('href')
    var element = document.getElementById(id.replace('#', ''))
    element.scrollIntoView({behavior: "smooth"})
  })
}

  $(this).closest(".dropdown").find(".dropdown-toggle").dropdown("toggle");


  $('.navbar-nav').click(function() {
    $('.navbar-collapse').collapse('hide');
  })

});

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("#menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// $(function() {
//   $(".typed").typed({
//     strings: ["Typed.js is a jQuery plugin that types.", "Enter in any string,", "and watch it type at the speed you've set,", "backspace what it's typed,", "and begin a new sentence for however many strings you've set."],
//     typeSpeed: 0
//   });
// });
