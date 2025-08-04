// Dropdown menu functionality
document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll("nav ul li");

    dropdowns.forEach((dropdown) => {
        dropdown.addEventListener("mouseenter", function () {
            const submenu = this.querySelector("ul");
            if (submenu) submenu.style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            const submenu = this.querySelector("ul");
            if (submenu) submenu.style.display = "none";
        });
    });
});

// Simple slider functionality (if used)
let slideIndex = 0;
function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1;}
    if (slides.length > 0) {
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change every 3 seconds
    }
}
showSlides();
