// Debug flag - set to true to see console logs
const DEBUG = true;

// Typewriter effect
function startTyping() {
    const text = "Welcome to my website";
    const typedTextElement = document.getElementById('typed-text');
    
    if (DEBUG) {
        console.log("Found element:", typedTextElement);
    }

    let index = 0;

    function type() {
        if (DEBUG) {
            console.log("Typing letter:", text[index]);
        }

        if (index < text.length) {
            typedTextElement.textContent += text[index];
            index++;
            setTimeout(type, 100);
        }
    }

    // Clear any existing text
    typedTextElement.textContent = '';
    // Start typing
    type();
}

// Call typing effect when page loads
document.addEventListener('DOMContentLoaded', startTyping);

// Keep all your existing scroll and navigation code
const scrollButton = document.getElementById('scrollTop');

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
};

scrollButton.onclick = function() {
    window.scrollTo({top: 0, behavior: 'mooth'});
};

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'mooth' });
    });
});

// Active section highlighting
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 60) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '#888';
        if (link.getAttribute('href').substring(1) === current) {
            link.style.color = '#fff';
        }
    });
});
