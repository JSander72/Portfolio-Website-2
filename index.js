
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links
    var navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            var targetId = this.getAttribute('href').substring(1);
            var targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
