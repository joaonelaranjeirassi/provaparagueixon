// Menu interativo
const menuButton = document.getElementById("menu-btn");
const dropdownMenu = document.getElementById("dropdown-menu");

menuButton.addEventListener("click", () => {
    dropdownMenu.classList.toggle("hidden");
});

// Carrossel de produtos
const carouselItems = document.querySelector(".carousel-items");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0;

prevButton.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselItems.children.length - 1;
    }
    updateCarousel();
});

nextButton.addEventListener("click", () => {
    if (currentIndex < carouselItems.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
});

function updateCarousel() {
    const offset = -currentIndex * 100;
    carouselItems.style.transform = `translateX(${offset}%)`;
}
