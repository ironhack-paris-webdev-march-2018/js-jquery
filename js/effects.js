$("body").click(function () {
  $(".wrapper").toggle(4000);
  // there's also "fadeToggle()" and "slideToggle()" for different effects
});

var x = 0;
var y = 0;

$("body").keydown(function () {
  switch (event.keyCode) {
    case 32: // space bar
    case 87: // W key (90 for French keyboards)
    case 38: // up arrow
      y += 5;
      break;

    case 65: // A key (81 for French keyboards)
    case 37: // left arrow
      x -= 5;
      break;

    case 83: // S key
    case 40: // down arrow
      y -= 5;
      break;

    case 68: // D key
    case 39: // right arrow
      x += 5;
      break;
  }
  // update Mr. Guetta's position on the screen
  $("img").css({ left: x, bottom: y });
});
