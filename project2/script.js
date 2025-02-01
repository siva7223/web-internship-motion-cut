let index = 0;
const slides = document.querySelector(".slides");
const totalSlides = document.querySelectorAll(".slide").length;
const caption = document.querySelector(".caption");

function showSlide() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  caption.textContent = document
    .querySelectorAll(".slide")
    [index].getAttribute("data-caption");
}

function prevSlide() {
  index = index === 0 ? totalSlides - 1 : index - 1;
  showSlide();
}

function nextSlide() {
  index = index === totalSlides - 1 ? 0 : index + 1;
  showSlide();
}

function goToSlide(n) {
  index = n;
  showSlide();
}

setInterval(() => {
  nextSlide();
}, 3000);

showSlide();
