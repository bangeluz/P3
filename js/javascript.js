$(document).ready(function() {
  $(".item img").mouseenter(function() {
    var cbg = $(this).attr("src");
    $("#colorbg").attr("src", cbg).stop().fadeOut(1).fadeIn(250);
  });
})
