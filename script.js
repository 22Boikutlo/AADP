// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const mobileMenu = document.querySelector('.mobile-menu'); // Ensure class matches HTML
    const navLinks = document.querySelector('.nav-links'); // Ensure class matches HTML

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for contacting us! We will get back to you shortly.');
            contactForm.reset();
        });
    }
});
