// Change the navbar background color when scrolling
window.onscroll = function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }
};

// Toggle navigation menu on mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('nav-menu_visible');
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('nav-menu_visible');
    }
});
