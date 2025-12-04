// Smooth scrolling and active nav link
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        // Close hamburger menu if open
        if (window.innerWidth < 768) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// CTA Button scroll to clubs section
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    document.getElementById('clubs').scrollIntoView({ behavior: 'smooth' });
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    // Show success message (in a real app, this would send to a server)
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.background = 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)';
    
    // Reset form
    contactForm.reset();
    
    // Reset button after 3 seconds
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 3000);
    
    console.log('Form submitted:', { name, email, message });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all club cards and about cards
document.querySelectorAll('.club-card, .about-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Animate statistics on scroll
const statsSection = document.querySelector('.stats');
let hasAnimated = false;

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
            hasAnimated = true;
            animateStats();
        }
    });
}, { threshold: 0.5 });

statsObserver.observe(statsSection);

function animateStats() {
    const statItems = document.querySelectorAll('.stat-item h3');
    
    statItems.forEach(item => {
        const finalValue = parseInt(item.textContent);
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const timer = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                item.textContent = item.textContent; // Keep original format
                clearInterval(timer);
            } else {
                if (item.textContent.includes('%')) {
                    item.textContent = Math.floor(currentValue) + '%';
                } else if (item.textContent.includes('+')) {
                    item.textContent = Math.floor(currentValue) + '+';
                } else {
                    item.textContent = Math.floor(currentValue) + '+';
                }
            }
        }, 30);
    });
}

// Add scroll-to-top button functionality
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        if (!document.querySelector('.scroll-to-top')) {
            createScrollToTopButton();
        }
    } else {
        const btn = document.querySelector('.scroll-to-top');
        if (btn) btn.remove();
    }
});

function createScrollToTopButton() {
    const btn = document.createElement('button');
    btn.className = 'scroll-to-top';
    btn.innerHTML = '↑';
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    document.body.appendChild(btn);
}

// Add scroll-to-top button styles dynamically
const style = document.createElement('style');
style.textContent = `
    .scroll-to-top {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #FF6B35 0%, #FFA500 100%);
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        box-shadow: 0 5px 20px rgba(255, 107, 53, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .scroll-to-top:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(255, 107, 53, 0.5);
    }
    
    @media (max-width: 480px) {
        .scroll-to-top {
            width: 40px;
            height: 40px;
            bottom: 1rem;
            right: 1rem;
            font-size: 1.2rem;
        }
    }
`;
document.head.appendChild(style);

// Log initialization
console.log('🎓 Clubs of RIT website loaded successfully!');
