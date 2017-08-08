
$(document).ready(function() {
  $(".clickable.all-images .initially-showing").click(function() {
    $("span.initially-showing").toggle();
    $("span.initially-hidden").toggle();
    $("div.initially-showing").fadeOut();
    $("div.initially-hidden").fadeIn();
  });

  $(".clickable.all-images .initially-hidden").click(function() {
    $("span.initially-showing").toggle();
    $("span.initially-hidden").toggle();
    $("div.initially-showing").fadeIn();
    $("div.initially-hidden").fadeOut();
  });

  $(".walrus .clickable").click(function() {
    $("div.initially-showing.walrus").fadeToggle();
    $("div.initially-hidden.walrus").fadeToggle();
  });

  $(".fennec-fox .clickable").click(function() {
    $("div.initially-showing.fennec-fox").slideToggle();
    $("div.initially-hidden.fennec-fox").slideToggle();
  });
  $(".text .clickable").click(function() {
    $("div.initially-showing.text").fadeToggle();
    $("div.initially-hidden.text").fadeToggle();
  });
});
