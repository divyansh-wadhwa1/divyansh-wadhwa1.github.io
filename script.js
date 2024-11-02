document.addEventListener("DOMContentLoaded", function() {
    const text = "Welcome to My Portfolio";
    const typingElement = document.getElementById("typing-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 150); // Adjust typing speed here
        }
    }

    type();
});
