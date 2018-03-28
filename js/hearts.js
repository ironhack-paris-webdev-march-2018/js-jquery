$(".delete").click(function () {
  var deleteBtn = $(event.target);
  // find the closest <li> ancestor
  deleteBtn.closest("li").remove();
});

$("#add-task").click(function () {
  // find the input text
  var text = $(".task-input").val();

  // create an <li> with the text
  var newLi =
    $("<li><span>" + text + "</span> <button class='delete'>Delete</button></li>");

  // find the <button> inside the <li>
  newLi.find(".delete").click(function () {
    var deleteBtn = $(event.target);
    // find the closest <li> ancestor
    deleteBtn.closest("li").remove();
  });

  // add the <li> to the list
  $("#task-list").prepend(newLi);

  // remove the text from the input
  $(".task-input").val("");
});

$('.heart').click(function(){
  var currentHeart = $(event.target);
  currentHeart.prevAll().addClass('on');
  currentHeart.addClass('on');
  currentHeart.nextAll().removeClass('on');
});
