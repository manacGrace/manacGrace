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

// Form submission is now handled by Netlify Forms
// No JavaScript needed - Netlify handles everything automatically

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