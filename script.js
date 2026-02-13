// Smooth scroll animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections
document.addEventListener('DOMContentLoaded', () => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
    
    // Animate timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-30px)';
        item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(item);
    });
    
    // Animate committee badges
    const badges = document.querySelectorAll('.committee-badge');
    badges.forEach((badge, index) => {
        badge.style.opacity = '0';
        badge.style.transform = 'scale(0.8)';
        badge.style.transition = `opacity 0.5s ease ${index * 0.15}s, transform 0.5s ease ${index * 0.15}s`;
        observer.observe(badge);
    });
    
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
    
    // Add hover effect to timeline items
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.boxShadow = '0 4px 20px rgba(212, 175, 55, 0.3)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.boxShadow = 'none';
        });
    });
    
    // Add interactive glow to committee badges
    badges.forEach(badge => {
        badge.addEventListener('mouseenter', (e) => {
            const rect = badge.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            badge.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.3) 0%, transparent 70%)`;
        });
        
        badge.addEventListener('mousemove', (e) => {
            const rect = badge.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            badge.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(212, 175, 55, 0.3) 0%, transparent 70%)`;
        });
        
        badge.addEventListener('mouseleave', () => {
            badge.style.background = 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)';
        });
    });
    
    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const spans = heroTitle.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.animation = `fadeInUp 1s ease-out ${index * 0.2}s both`;
        });
    }
    
    // Add stagger animation to awards columns
    const awardColumns = document.querySelectorAll('.awards-column');
    awardColumns.forEach((column, index) => {
        column.style.opacity = '0';
        column.style.transform = 'translateY(20px)';
        column.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
        observer.observe(column);
    });
    
    // Add pulse animation to registration QR code
    const qrCode = document.querySelector('.qr-code');
    if (qrCode) {
        setInterval(() => {
            qrCode.style.transform = 'scale(1.05)';
            setTimeout(() => {
                qrCode.style.transform = 'scale(1)';
            }, 300);
        }, 3000);
    }
    
    // Add counter animation for dates
    const dates = document.querySelectorAll('.date');
    dates.forEach((date, index) => {
        date.style.animation = `fadeInUp 0.8s ease-out ${0.5 + index * 0.2}s both`;
    });
    
    // Smooth scroll for anchor links (if any are added)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add shimmer effect to gold elements
    const goldElements = document.querySelectorAll('.timeline-name h3, .badge-icon');
    goldElements.forEach(element => {
        element.style.position = 'relative';
        element.style.overflow = 'hidden';
        
        const shimmer = document.createElement('div');
        shimmer.style.position = 'absolute';
        shimmer.style.top = '0';
        shimmer.style.left = '-100%';
        shimmer.style.width = '100%';
        shimmer.style.height = '100%';
        shimmer.style.background = 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)';
        shimmer.style.animation = 'shimmer 3s infinite';
        
        element.appendChild(shimmer);
    });
    
    // Add CSS for shimmer animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes shimmer {
            0% {
                left: -100%;
            }
            100% {
                left: 100%;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add scroll progress indicator
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '3px';
    progressBar.style.background = 'linear-gradient(to right, var(--orange), var(--yellow), var(--green))';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
    
    // Add dynamic text glow on committee details
    const detailHeaders = document.querySelectorAll('.detail-header h2');
    detailHeaders.forEach(header => {
        header.addEventListener('mouseenter', () => {
            header.style.textShadow = '0 0 20px rgba(255, 215, 0, 0.8)';
        });
        
        header.addEventListener('mouseleave', () => {
            header.style.textShadow = 'none';
        });
    });
    
    // Console message
    console.log('%c🇮🇳 Atal Yuva Sansad - Ajar Amar Atal 🇮🇳', 
        'color: #FF6B35; font-size: 20px; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.5);');
    console.log('%cJune 12-14 | A Youth Parliament Initiative', 
        'color: #4CAF50; font-size: 14px;');
});

// Preload critical content
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add performance optimization for scroll
let ticking = false;
window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            // Scroll-based animations
            ticking = false;
        });
        ticking = true;
    }
});
