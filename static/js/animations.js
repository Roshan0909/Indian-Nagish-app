document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add a click event listener for the "Start Listening" button
    const startBtn = document.getElementById("startListening");
    if (startBtn) {
        startBtn.addEventListener("click", function() {
            const listeningIndicator = document.getElementById("listening-indicator");
            if (listeningIndicator) {
                listeningIndicator.style.display = 'block'; // Show spinner
                // Optional: add fade-in animation
                listeningIndicator.style.opacity = 0;
                listeningIndicator.style.transition = 'opacity 0.5s ease-in-out';
                setTimeout(() => {
                    listeningIndicator.style.opacity = 1;
                }, 100);
            }
        });
    }
});
