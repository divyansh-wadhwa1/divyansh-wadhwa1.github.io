// Typing effect for landing screen
window.addEventListener("load", () => {
    document.querySelector(".navbar").style.display = "flex";
});

// Smooth scrolling for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Back-to-top button functionality
const backToTopButton = document.getElementById("back-to-top");
backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
