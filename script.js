// Wait for the typing animation to complete
setTimeout(() => {
    const typingContainer = document.querySelector('.typing-container');
    const mainContent = document.querySelector('.main-content');
    
    // Fade out typing effect
    typingContainer.style.opacity = '0';
    
    // Show main content
    mainContent.style.opacity = '1';
    
    // Remove typing container after fade
    setTimeout(() => {
        typingContainer.style.display = 'none';
    }, 500);
}, 4000); // Adjust timing based on your preference