$(".fg li").click(function() {
  var open = parseInt($(this).css("left"));
  if (!open) {
    $(this).css("left", "200px");
  } else {
    $(this).css("left", "0px");
  }
});
