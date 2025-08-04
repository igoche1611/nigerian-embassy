// Slider interactivity
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  let current = 0;
  const showSlide = idx => {
    slides.forEach(s => s.classList.remove('active'));
    slides[idx].classList.add('active');
  };
  document.querySelector('.next').onclick = () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  };
  document.querySelector('.prev').onclick = () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  };
});
