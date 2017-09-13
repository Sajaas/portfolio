$(document).ready(function(){
  $('.target').pushpin({
    top: 0,
    bottom: 1000,
    offset: 0
  });
  if ($('.pushpin-demo-nav').length) {
    $('.pushpin-demo-nav').each(function() {
      var $this = $(this);
      var $target = $('#' + $(this).attr('data-target'));
      $this.pushpin({
        top: $target.offset().top,
        bottom: $target.offset().top + $target.outerHeight() - $this.height()
      });
    });
  }
  $('.hover').mouseover(function() {
    $('.text').css("visibility","visible");
  });

  $('.hover').mouseout(function() {
    $('.text').css("visibility","hidden");
  });
  $(".button-collapse").sideNav();
  $('.collapsible').collapsible();
});

function copyToClipboard(element) {
var $temp = $("<input>");
$("body").append($temp);
$temp.val($(element).html()).select();
document.execCommand("copy");
$temp.remove();
}


// $(document).ready(function(){
//     $('.collapsible').collapsible();
//   });
