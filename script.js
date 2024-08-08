// Change the navbar background color when scrolling
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};

// Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });

        if (navMenu.classList.contains('nav-menu_visible')) {
            navMenu.classList.remove('nav-menu_visible');
        }
    });
});

// Close menu on resize for larger screens
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('nav-menu_visible');
    }
});
