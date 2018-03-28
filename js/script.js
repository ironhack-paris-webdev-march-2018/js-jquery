console.log("script.js");

// runs when the page finishes loading
$(document).ready(function () {
  // var myH1 = document.querySelector("h1");
  // myH1.style.color = "deeppink";
  // myH1.style.backgroundColor = "black";

  // When you click this H1...
  // myH1.onclick = function () {...
  $("h1").click(function () {
    $("h1").toggleClass("crazy");
    $(".song-list > li:first").toggleClass("orange");
  });
});
