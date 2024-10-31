document.addEventListener("DOMContentLoaded", function() {
    console.log("Welcome to My GitHub Pages Site!");

    // You can add more JavaScript functionality here if needed
    // Example: Smooth scroll to section
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
