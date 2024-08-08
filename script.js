// Change the navbar background color when scrolling
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) { // Adjust the scroll value as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-menu a');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
    document.body.classList.toggle('no-scroll'); // Prevent body scroll when nav is open
});

// Smooth scrolling for navigation links
navLinks.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

        // Close the mobile menu after clicking a link
        if (navMenu.classList.contains('nav-menu_visible')) {
            navMenu.classList.remove('nav-menu_visible');
            document.body.classList.remove('no-scroll'); // Re-enable body scroll
        }
    });
});

// Close menu on resize for larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('nav-menu_visible');
        document.body.classList.remove('no-scroll'); // Re-enable body scroll on larger screens
    }
});

// Adjust scroll offset dynamically for fixed navbar
window.addEventListener('load', adjustScrollOffset);
window.addEventListener('resize', adjustScrollOffset);

function adjustScrollOffset() {
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            const offset = document.getElementById('navbar').offsetHeight; // Dynamic offset calculation
            window.scrollTo({
                top: targetSection.offsetTop - offset,
                behavior: 'smooth'
            });

            if (navMenu.classList.contains('nav-menu_visible')) {
                navMenu.classList.remove('nav-menu_visible');
                document.body.classList.remove('no-scroll');
            }
        });
    });
}
