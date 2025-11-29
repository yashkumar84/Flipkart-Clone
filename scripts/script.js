let carouselWrapper = document.getElementById("carouselWrapper");
let prevButton = document.getElementById("prevBtn");
let nextButton = document.getElementById("nextBtn");
const carouselSlides = document.querySelectorAll(".carousel-slide");
const dotContainer = document.querySelector(".dot-container");

let currentIndex = 0;
let totalSlides = carouselSlides.length;
let currentInterval;
let isTransitioning = false;

const firstClone = carouselSlides[0].cloneNode(true);
const lastClone = carouselSlides[totalSlides - 1].cloneNode(true);

carouselWrapper.appendChild(firstClone);
carouselWrapper.insertBefore(lastClone, carouselSlides[0]);

carouselWrapper.style.transform = `translateX(-100%)`;

carouselSlides.forEach((ele, index) => {
  const dot = document.createElement("button");
  dot.classList = "carousel-dot";
  if (index === 0) {
    dot.classList.add("active");
  }
  dot.addEventListener("click", () => goToSlide(index));
  dotContainer.append(dot);
});

function updateCarousel(transition = true) {
  if (transition) {
    carouselWrapper.style.transition = "transform 0.5s ease-in-out";
  } else {
    carouselWrapper.style.transition = "none";
  }

  carouselWrapper.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

  const dots = document.querySelectorAll(".carousel-dot");
  const dotIndex = ((currentIndex % totalSlides) + totalSlides) % totalSlides;
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === dotIndex);
  });
}

function handleLastTransition() {
  isTransitioning = false;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
    updateCarousel(false);
  } else if (currentIndex < 0) {
    currentIndex = totalSlides - 1;
    updateCarousel(false);
  }
}

function goToSlide(index) {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex = index;
  updateCarousel();
}

function nextSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex++;
  updateCarousel();
}

function prevSlide() {
  if (isTransitioning) return;
  isTransitioning = true;
  currentIndex--;
  updateCarousel();
}

function autoPlay() {
  currentInterval = setInterval(nextSlide, 3000);
}

function stopAutoPlay() {
  clearInterval(currentInterval);
}

function resetAutoPlay() {
  stopAutoPlay();
  autoPlay();
}

prevButton.addEventListener("click", () => {
  prevSlide();
  resetAutoPlay();
});

nextButton.addEventListener("click", () => {
  nextSlide();
  resetAutoPlay();
});

carouselWrapper.addEventListener("transitionend", handleLastTransition);

carouselWrapper.addEventListener("mouseenter", stopAutoPlay);
carouselWrapper.addEventListener("mouseleave", autoPlay);

// Start autoplay
autoPlay();
