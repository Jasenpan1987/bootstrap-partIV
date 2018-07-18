$(document).ready(function() {
  lightbox.option({
    resizeDuration: 400,
    wrapAround: true // img8 -> img1
  });

  $(window).scroll(function() {
    const position = $(this).scrollTop();
    const GALLARY_DISPLAY_POSITION = 300;
    const rows = [$(".first-row"), $(".second-row")];
    const secondRow = $(".second-row");
    if (position >= GALLARY_DISPLAY_POSITION) {
      rows.forEach(row => {
        row.addClass("rowin");
      });
    } else {
      rows.forEach(row => {
        row.removeClass("rowin");
      });
    }
  });
});
