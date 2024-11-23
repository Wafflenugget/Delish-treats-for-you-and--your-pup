// Initialize AOS (Animate on Scroll)
AOS.init();

// Smooth Scroll for Anchor Links
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").slice(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Gallery Fade-in Effect
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems[0].classList.add('visible');
function animateGallery() {
    let current = 0;
    setInterval(() => {
        galleryItems[current].classList.remove('visible');
        current = (current + 1) % galleryItems.length;
        galleryItems[current].classList.add('visible');
    }, 2000);
}
animateGallery();

// Pop-up Show after 1 second
window.onload = function() {
    setTimeout(function() {
        document.getElementById("welcome-popup").classList.add("show");
    }, 1000);
};

// Close Pop-up
function closePopup() {
    document.getElementById("welcome-popup").classList.remove("show");
}