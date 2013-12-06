// TIMER http://momentjs.com/

function showMonths() {
  var timeAgo = new moment("2013-10-01T11:00:00").fromNow(true);

  $("#timer").html(timeAgo);
}

// NAVIGATION BAR

function firstToggleMenu() {
  $("#navigation-menu").toggleClass("show-menu").delay(500).queue(function(){
    $(this).toggleClass("show-menu");
    $(this).dequeue();
  });  
}
function toggleMenuClass() {
  $("#navigation-menu").toggleClass("show-menu");
}

function toggleMenu() {
  $("#navigation .logo").click(toggleMenuClass);
}

// SCROLL

$('#home-btn').click(function(){
  $.scrollTo( '#header', 800 );
});
$('#cover-letter-btn').click(function(){
  $.scrollTo( '#cover-letter', 800 );
});
$('#skills-btn').click(function(){
  $.scrollTo( '#skills', 800 );
});
$('#resources-btn').click(function(){
  $.scrollTo( '#resources', 800 );
});
$('#projects-btn').click(function(){
  $.scrollTo( '#projects', 800 );
});
$('#contact-btn').click(function(){
  $.scrollTo( '#contact', 800 );
});