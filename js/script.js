$(document).ready(function() {
  lightbox.option({
    resizeDuration: 400,
    wrapAround: true // img8 -> img1
  });

  $(window).scroll(function() {
    const position = $(this).scrollTop();
    const GALLARY_DISPLAY_POSITION = 300;
    const rows = [$(".first-row"), $(".second-row")];

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

  $(".writers-accordion").click(function(e) {
    console.log(e.target.id.split("-")[1]);
    if (e.target.id.split("-")[0] === "button") {
      const authorName = e.target.id.split("-")[1];
      $("#book-1").replaceWith(
        `<img src="img/writers/${authorName}-book1.jpg" alt="${authorName}1" class="img-fluid" id="book-1">`
      );

      $("#book-2").replaceWith(
        `<img src="img/writers/${authorName}-book2.jpg" alt="${authorName}2" class="img-fluid" id="book-2">`
      );
    }
  });

  $(".hamburger-menu").click(function() {
    $(".navigation").toggleClass("change");
  });
});
