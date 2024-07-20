const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const totalImages = images.length;
let currentIndex = 0;

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  slides.style.transform = `translateX(-${currentIndex * 300}px)`;

  // To create infinite effect, reset position at midpoint
  if (currentIndex === totalImages / 2) {
    slides.style.transition = "none";
    slides.style.transform = `translateX(0px)`;
    currentIndex = 0;
    setTimeout(() => {
      slides.style.transition = "transform 0.5s ease-in-out";
    }, 50);
  }
}

setInterval(nextSlide, 2000);
