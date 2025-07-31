let slides = document.querySelectorAll(".slide");
let index = 0;

function showNextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}

setInterval(showNextSlide, 5000); // 5 seconds per slide
