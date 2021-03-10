//parallax
(function () {
  document.addEventListener("mousemove", parallax);
  const elem = document.querySelector(".parallax");

  function parallax(e) {
    let _w = window.innerWidth / 2;
    let _h = window.innerHeight / 2;
    let _mouseX = e.clientX;
    let _mouseY = e.clientY;
    let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${
      50 - (_mouseY - _h) * 0.01
    }%`;
    let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${
      50 - (_mouseY - _h) * 0.02
    }%`;
    let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${
      50 - (_mouseY - _h) * 0.06
    }%`;
    let x = `${_depth3}, ${_depth2}, ${_depth1}`;
    console.log(x);
    elem.style.backgroundPosition = x;
  }
})();

//about

const container = document.querySelector(".box-container");
const contents = document.querySelectorAll(".content");
const buttons = document.querySelectorAll(".mybtn");

buttons.forEach((button) =>
  button.addEventListener("click", function () {
    container.classList.toggle("right-open");
  })
);

//video popup

$(document).ready(function () {
  var $videoSrc;
  $(".video-btn").click(function () {
    $videoSrc = $(this).data("src");
  });
  $("#MakeModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#MakeModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });
});
