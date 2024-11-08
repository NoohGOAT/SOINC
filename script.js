document.getElementById('animatedButton').addEventListener('click', function() {
    // Trigger focus to start animations
    this.focus();

    // Set a delay for page change (total animation duration)
    const totalAnimationDuration = 1300; // 0.5s for extend + 0.5s for disappear + 0.8s for appear

    setTimeout(() => {
        // Change the page after the delay
        window.location.href = 'nextPage.html'; // Change to your target URL
    }, totalAnimationDuration);
});