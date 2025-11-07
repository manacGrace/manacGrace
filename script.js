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

// Translation object
const translations = {
    fr: {
        nav: {
            about: 'À propos',
            skills: 'Compétences',
            projects: 'Projets',
            education: 'Formation',
            contact: 'Contact'
        },
        about: {
            subtitle: 'Développement logiciel full-stack • Infrastructure • Soutien',
            downloadCV: '📄 Télécharger CV',
            contact: '📩 Contact',
            professionalSummary: 'Résumé professionnel',
            description1: 'Étudiant en Techniques de l\'informatique, motivé et polyvalent, possédant une solide base en développement front-end et back-end, en réseaux, en infonuagique et en soutien informatique. Passionné par l\'apprentissage continu et la résolution de problèmes techniques.',
            description2: 'À la recherche d\'un stage afin de mettre en pratique mes compétences, contribuer à des projets concrets et approfondir mon expérience en développement, en réseaux et en technologies de l\'information.'
        },
        skills: {
            title: 'COMPÉTENCES',
            subtitle: 'Techniques & humaines',
            virtualMachines: 'Machines virtuels',
            chromiumExtensions: 'Chromium Extensions',
            routersHubs: 'Commutateurs / Concentrateurs',
            communication: 'Communication',
            teamwork: 'Travail d\'équipe',
            logicAnalysis: 'Logique & Analyse',
            problemSolving: 'Résolution de problèmes'
        },
        projects: {
            title: 'PROJETS',
            subtitle: 'Mes réalisations récentes',
            realEstateDesc: 'Application web immobilière full-stack que j\'ai conçue et dont j\'ai automatisé le déploiement sur AWS EC2, en appliquant le concept d\'Infrastructure as Code avec Terraform.',
            popupGPTDesc: 'Une extension de navigateur Chromium qui offre une assistance à l\'écriture grâce à ChatGPT, via une fenêtre popup.',
            starDestroyerDesc: 'STARDESTROYER, un jeu Shoot \'em Up 2D fait avec UNITY.',
            backendDesc: 'Prototype d\'API RESTful pour la gestion d\'une bibliothèque personnelle de contenus audiovisuels (films, séries, mini-séries).',
            viewGitHub: 'Voir le GitHub',
            play: 'Jouer'
        },
        education: {
            title: 'FORMATION',
            subtitle: 'Mon parcours académique',
            degree: 'DEC — Techniques de l\'informatique | 2023 - 2026',
            school: 'Cégep Marie-Victorin — Montréal, QC',
            description: 'Développement front-end/back-end, web/mobile, réseaux/infonuagique, soutien informatique, bases de données, platformes embarquées, jeux vidéo.'
        },
        contact: {
            title: 'CONTACT',
            subtitle: 'Travaillons ensemble',
            languages: 'Langues : Français, Anglais',
            emailLabel: 'Email',
            phoneLabel: 'Téléphone',
            locationLabel: 'Localisation',
            socialLabel: 'Réseaux sociaux',
            formName: 'Votre nom',
            formEmail: 'Votre email',
            formMessage: 'Votre message'
        },
        footer: {
            copyright: '© 2025 Manassé Teg Gbegnohou — Tous droits réservés.'
        }
    },
    en: {
        nav: {
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            education: 'Education',
            contact: 'Contact'
        },
        about: {
            subtitle: 'Full-stack Software Development • Infrastructure • Support',
            downloadCV: '📄 Download CV',
            contact: '📩 Contact',
            professionalSummary: 'Professional Summary',
            description1: 'Computer Science Technology student, motivated and versatile, with a solid foundation in front-end and back-end development, networking, cloud computing, and IT support. Passionate about continuous learning and solving technical problems.',
            description2: 'Seeking an internship to apply my skills, contribute to concrete projects, and deepen my experience in development, networking, and information technologies.'
        },
        skills: {
            title: 'SKILLS',
            subtitle: 'Technical & Soft',
            virtualMachines: 'Virtual Machines',
            chromiumExtensions: 'Chromium Extensions',
            routersHubs: 'Switches / Hubs',
            communication: 'Communication',
            teamwork: 'Teamwork',
            logicAnalysis: 'Logic & Analysis',
            problemSolving: 'Problem Solving'
        },
        projects: {
            title: 'PROJECTS',
            subtitle: 'My Recent Work',
            realEstateDesc: 'A full-stack real estate web application that I designed and automated the deployment of on AWS EC2, applying the Infrastructure-as-Code approach with Terraform.',
            popupGPTDesc: 'A powerful browser extension that brings ChatGPT\'s writing assistance directly to your popup!',
            starDestroyerDesc: 'STARDESTROYER, a 2D Shoot \'em Up game made with UNITY.',
            backendDesc: 'RESTful API prototype for managing a personal library of audiovisual content (movies, series, mini-series).',
            viewGitHub: 'View GitHub',
            play: 'Play'
        },
        education: {
            title: 'EDUCATION',
            subtitle: 'My Academic Journey',
            degree: 'DEC — Computer Science Technology | 2023 - 2026',
            school: 'Cégep Marie-Victorin — Montréal, QC',
            description: 'Front-end/back-end development, web/mobile, networking/cloud computing, IT support, databases, embedded platforms, video games.'
        },
        contact: {
            title: 'CONTACT',
            subtitle: 'Let\'s Work Together',
            languages: 'Languages: French, English',
            emailLabel: 'Email',
            phoneLabel: 'Phone',
            locationLabel: 'Location',
            socialLabel: 'Social Media',
            formName: 'Your name',
            formEmail: 'Your email',
            formMessage: 'Your message'
        },
        footer: {
            copyright: '© 2025 Manassé Teg Gbegnohou — All rights reserved.'
        }
    }
};

// Language Toggle Function
function toggleLanguage() {
    const htmlElement = document.getElementById('html-lang');
    const currentLang = htmlElement.getAttribute('lang');
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    
    // Update HTML lang attribute
    htmlElement.setAttribute('lang', newLang);
    
    // Save language preference
    localStorage.setItem('language', newLang);
    
    // Update language indicator
    updateLanguageIndicator(newLang);
    
    // Update all translatable elements
    updateLanguage(newLang);
}

// Update language indicator (shows the opposite language - the one you'll switch to)
function updateLanguageIndicator(lang) {
    const languageText = document.getElementById('language-text');
    if (languageText) {
        const oppositeLang = lang === 'fr' ? 'en' : 'fr';
        languageText.textContent = oppositeLang.toUpperCase();
    }
}

// Update language function
function updateLanguage(lang) {
    // Update elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.textContent = translation;
        }
    });
    
    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const keys = key.split('.');
        let translation = translations[lang];
        
        for (const k of keys) {
            translation = translation[k];
        }
        
        if (translation) {
            element.setAttribute('placeholder', translation);
        }
    });
    
    // Update CV link href based on language
    const cvLink = document.getElementById('cv-link');
    if (cvLink) {
        cvLink.setAttribute('href', `./assets/ManasséTegGbegnohou_${lang}.pdf`);
    }
}

// Load saved language on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    const htmlElement = document.getElementById('html-lang');
    
    htmlElement.setAttribute('lang', savedLanguage);
    updateLanguageIndicator(savedLanguage);
    updateLanguage(savedLanguage);
});