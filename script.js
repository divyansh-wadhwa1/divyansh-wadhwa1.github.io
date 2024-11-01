// Typing text content
const text = "Welcome to My Portfolio";
let index = 0;

function typeText() {
    const typingText = document.getElementById("typing-text");
    typingText.textContent = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(typeText, 100); // Typing speed
    } else {
        setTimeout(() => {
            document.querySelector(".typing-section").style.display = "none";
            document.querySelector(".content").style.display = "block";
        }, 1000); // Delay before revealing content
    }
}

window.onload = typeText;

