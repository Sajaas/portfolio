$(document).ready(function(){
  $('.hover').mouseout(function() {
    $('.text').css("visibility","hidden");
  });
  $('.hover').mouseenter(function() {
    $('.text').css("visibility","visible");
  });
  $('.collapsible').collapsible();
  $('.parallax').parallax();
  $(".button-collapse").sideNav({
    closeOnClick: true
  });
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
}
