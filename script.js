// Portfolio JavaScript - Navigation mobile et fonctionnalités de base

function hideShowNavbar(){
    var header = document.querySelector('header');
    var menu = document.querySelector('#menu-icon');
    var navbar = document.querySelector('.navbar');
    
    /* Show the navbar options when the menu icon is clicked*/
    menu.onclick = () =>{
        navbar.classList.toggle('active');
    };
    
    /* Hides the navbar options when the window is being scrolled*/
    window.onscroll = () =>{
        navbar.classList.remove('active');
    };
}

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Form submission handling with redirect
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on a success page (Netlify adds ?success=true to URL)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        window.location.href = 'success.html';
        return;
    }
    
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            // Let Netlify handle the form submission
            // The page will reload with ?success=true parameter
        });
    }
});

// Active navigation link based on scroll position
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar a[href^="#"]');
    
    function updateActiveLink() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveLink);
    updateActiveLink(); // Set initial active link
});

// Theme Toggle Function
function toggleTheme() {
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    // Toggle dark mode class
    body.classList.toggle('dark-mode');
    
    // Update icon based on current theme
    if (body.classList.contains('dark-mode')) {
        themeIcon.className = 'bx bx-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'bx bx-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        themeIcon.className = 'bx bx-sun';
    } else {
        body.classList.remove('dark-mode');
        themeIcon.className = 'bx bx-moon';
    }
    
});
