$(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(function () {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 100) {
        $(".navb").addClass("scrolled");
        //  alert("scrolled");
      } else {
        $(".navb").removeClass("scrolled");
      }
    });
  });
  $('.carousel').carousel({
    interval: 2000
  })


AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
  });



const images = document.querySelectorAll(".Expandable");

const modal = document.getElementById("myModal");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

Array.prototype.slice.call(images).map(function (element) {
element.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}

});
