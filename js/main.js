/**
 * GRAANIT PORTFOLIO - Main JavaScript
 * Handles navigation, scroll effects, and interactivity
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // =================================
    // Navbar Scroll Effect
    // =================================
    const navbar = document.getElementById('mainNav');
    
    function handleNavbarScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }
    
    window.addEventListener('scroll', handleNavbarScroll);
    handleNavbarScroll(); // Check on load
    
    // =================================
    // Active Navigation Link
    // =================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    function updateActiveNavLink() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // =================================
    // Smooth Scroll for Navigation Links
    // =================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#" or external link
            if (href === '#' || !href.startsWith('#')) return;
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const targetPosition = target.offsetTop - 100;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                    bsCollapse.hide();
                }
                
                // Close dropdown menu
                const dropdown = document.querySelector('.dropdown-menu');
                if (dropdown && dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                }
            }
        });
    });
    
    // =================================
    // Scroll to Top Button
    // =================================
    const scrollTopBtn = document.getElementById('scrollTop');
    
    function handleScrollTopButton() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }
    
    window.addEventListener('scroll', handleScrollTopButton);
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // =================================
    // Reveal Elements on Scroll
    // =================================
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .contact-link-card, .about-card');
    
    function revealOnScroll() {
        const triggerBottom = window.innerHeight * 0.85;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < triggerBottom) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial styles for reveal animation
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Check on load
    
    // =================================
    // Animated Counter for Stats
    // =================================
    const statValues = document.querySelectorAll('.stat-value');
    let counterAnimated = false;
    
    function animateCounter() {
        if (counterAnimated) return;
        
        const heroSection = document.querySelector('.hero-section');
        if (!heroSection) return;
        
        const sectionBottom = heroSection.getBoundingClientRect().bottom;
        if (sectionBottom < window.innerHeight * 0.8) {
            counterAnimated = true;
            
            statValues.forEach(stat => {
                const finalValue = stat.textContent;
                const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
                
                if (!isNaN(numericValue)) {
                    let currentValue = 0;
                    const increment = numericValue / 50;
                    const timer = setInterval(() => {
                        currentValue += increment;
                        if (currentValue >= numericValue) {
                            currentValue = numericValue;
                            clearInterval(timer);
                        }
                        stat.textContent = finalValue.replace(/[0-9.]+/, Math.floor(currentValue).toString());
                    }, 30);
                }
            });
        }
    }
    
    window.addEventListener('scroll', animateCounter);
    animateCounter(); // Check on load
    
    // =================================
    // Parallax Effect for Background
    // =================================
    const bgCircles = document.querySelectorAll('.bg-circle');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        bgCircles.forEach((circle, index) => {
            const speed = (index + 1) * 0.1;
            circle.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });
    
    // =================================
    // Mobile Menu Close on Click Outside
    // =================================
    document.addEventListener('click', function(event) {
        const navbar = document.querySelector('.navbar');
        const navbarCollapse = document.querySelector('.navbar-collapse');
        
        if (navbarCollapse && navbarCollapse.classList.contains('show')) {
            if (!navbar.contains(event.target)) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse);
                bsCollapse.hide();
            }
        }
    });
    
    // =================================
    // Add Loading Animation Class Removal
    // =================================
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
    
    // =================================
    // Console Easter Egg
    // =================================
    console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #dc2626;');
    console.log('%cInterested in collaborating? Reach out to @graanit2 on X!', 'font-size: 14px; color: #94a3b8;');
    
});

// =================================
// Intersection Observer for Advanced Animations
// =================================
if ('IntersectionObserver' in window) {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                
                // Unobserve after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('animate-on-scroll');
        observer.observe(section);
    });
}

// Add CSS for Intersection Observer animations
const style = document.createElement('style');
style.textContent = `
    .animate-on-scroll {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    
    .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateY(0);
    }
    
    body.loaded {
        overflow-x: hidden;
    }
`;
document.head.appendChild(style);
