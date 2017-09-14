$(document).ready(function(){
  $(".button-collapse").sideNav();
  $('.hover').mouseout(function() {
    $('.text').css("visibility","hidden");
  });
  $('.hover').mouseenter(function() {
    $('.text').css("visibility","visible");
  });
  $('.collapsible').collapsible();
});

function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).html()).select();
  document.execCommand("copy");
  $temp.remove();
}
