// DOM Elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');
const backToTopBtn = document.getElementById('back-to-top');
const sections = document.querySelectorAll('section');
const currentYear = document.getElementById('current-year');
const contactForm = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');
const newsletterForm = document.getElementById('newsletter-form');
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioGrid = document.querySelector('.portfolio-grid');
const servicesGrid = document.querySelector('.services-grid');

// Mobile Menu Toggle
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
    
    // Animate Links
    navLinksItems.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            burger.classList.remove('toggle');
            navLinksItems.forEach(link => {
                link.style.animation = '';
            });
        }
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.display = 'flex';
    } else {
        backToTopBtn.style.display = 'none';
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Set current year in footer
currentYear.textContent = new Date().getFullYear();

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Active link highlighting
window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 300) {
            current = section.getAttribute('id');
        }
    });
    
    navLinksItems.forEach(item => {
        item.querySelector('a').classList.remove('active');
        if (item.querySelector('a').getAttribute('href') === `#${current}`) {
            item.querySelector('a').classList.add('active');
        }
    });
});

// Form submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (!name || !email || !message) {
        formStatus.textContent = 'لطفاً تمام فیلدهای ضروری را پر کنید.';
        formStatus.style.color = '#e74c3c';
        return;
    }
    
    // Here you would normally send the form data to a server
    // For this demo, we'll just show a success message
    formStatus.textContent = 'پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.';
    formStatus.style.color = '#2ecc71';
    
    // Reset form
    contactForm.reset();
    
    // Clear status message after 5 seconds
    setTimeout(() => {
        formStatus.textContent = '';
    }, 5000);
});

// Newsletter subscription
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = newsletterForm.querySelector('input').value;
    
    if (!email) {
        alert('لطفاً آدرس ایمیل خود را وارد کنید.');
        return;
    }
    
    // Here you would normally send the email to your newsletter service
    alert(`با تشکر از ثبت نام شما! ایمیل ${email} به لیست خبرنامه ما اضافه شد.`);
    newsletterForm.reset();
});

// Portfolio filtering
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.getAttribute('data-filter');
        
        // Filter portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Load services data
const servicesData = [
    {
        icon: 'fas fa-laptop-code',
        title: 'توسعه وب',
        description: 'طراحی و توسعه وبسایت‌های واکنش‌گرا و مدرن با آخرین تکنولوژی‌ها'
    },
    {
        icon: 'fas fa-mobile-alt',
        title: 'توسعه اپلیکیشن',
        description: 'ساخت اپلیکیشن‌های موبایل برای پلتفرم‌های iOS و Android'
    },
    {
        icon: 'fas fa-paint-brush',
        title: 'طراحی UI/UX',
        description: 'طراحی رابط کاربری و تجربه کاربری حرفه‌ای برای محصولات دیجیتال'
    },
    {
        icon: 'fas fa-search',
        title: 'سئو',
        description: 'بهینه‌سازی وبسایت برای موتورهای جستجو و افزایش رتبه'
    },
    {
        icon: 'fas fa-bullhorn',
        title: 'دیجیتال مارکتینگ',
        description: 'استراتژی‌های بازاریابی دیجیتال برای رشد کسب‌وکار شما'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'تحلیل داده',
        description: 'تحلیل و آنالیز داده‌های کسب‌وکار برای تصمیم‌گیری بهتر'
    }
];

// Load portfolio data
const portfolioData = [
    {
        image: 'https://via.placeholder.com/600x400?text=Web+Project',
        title: 'پروژه وب ۱',
        category: 'web',
        description: 'یک وبسایت شرکتی با طراحی مدرن'
    },
    {
        image: 'https://via.placeholder.com/600x400?text=Mobile+App',
        title: 'اپلیکیشن موبایل',
        category: 'app',
        description: 'اپلیکیشن مدیریت وظایف برای iOS و Android'
    },
    {
        image: 'https://via.placeholder.com/600x400?text=Design',
        title: 'طراحی لوگو',
        category: 'design',
        description: 'طراحی لوگو و هویت بصری برای یک برند جدید'
    },
    {
        image: 'https://via.placeholder.com/600x400?text=Web+Project',
        title: 'پروژه وب ۲',
        category: 'web',
        description: 'فروشگاه اینترنتی با امکانات پیشرفته'
    },
    {
        image: 'https://via.placeholder.com/600x400?text=Mobile+App',
        title: 'اپلیکیشن سلامت',
        category: 'app',
        description: 'اپلیکیشن ردیابی فعالیت‌های ورزشی و سلامت'
    },
    {
        image: 'https://via.placeholder.com/600x400?text=Design',
        title: 'طراحی رابط کاربری',
        category: 'design',
        description: 'طراحی UI/UX برای یک سرویس آنلاین'
    }
];

// Render services
function renderServices() {
    servicesGrid.innerHTML = servicesData.map(service => `
        <div class="service-card fade-in">
            <div class="service-icon">
                <i class="${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        </div>
    `).join('');
}

// Render portfolio
function renderPortfolio() {
    portfolioGrid.innerHTML = portfolioData.map(item => `
        <div class="portfolio-item fade-in" data-category="${item.category}">
            <img src="${item.image}" alt="${item.title}" class="portfolio-img">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div>
                    <a href="#"><i class="fas fa-link"></i></a>
                    <a href="#"><i class="fas fa-search"></i></a>
                </div>
            </div>
        </div>
    `).join('');
}

// Animate stats counter
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const speed = 200;
    
    statNumbers.forEach(stat => {
        const target = +stat.getAttribute('data-count');
        const count = +stat.textContent;
        const increment = target / speed;
        
        if (count < target) {
            stat.textContent = Math.ceil(count + increment);
            setTimeout(animateStats, 1);
        } else {
            stat.textContent = target;
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderServices();
    renderPortfolio();
    
    // Animate stats when scrolled to about section
    const aboutSection = document.querySelector('.about-section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                observer.unobserve(aboutSection);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(aboutSection);
    
    // Add fade-in animation to elements when scrolled into view
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = `fadeIn 1s ease forwards`;
                fadeObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
        fadeObserver.observe(element);
    });
});

// Dark mode toggle (optional)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
darkModeToggle.id = 'dark-mode-toggle';
darkModeToggle.title = 'تغییر حالت تاریک/روشن';
document.body.appendChild(darkModeToggle);

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    
    if (document.body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', 'enabled');
    } else {
        darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check for saved dark mode preference
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Add dark mode styles
const style = document.createElement('style');
style.textContent = `
    .dark-mode {
        background-color: #121212;
        color: #f5f5f5;
    }
    
    .dark-mode header, 
    .dark-mode .service-card,
    .dark-mode .stat-item,
    .dark-mode .contact-container {
        background-color: #1e1e1e;
        color: #f5f5f5;
    }
    
    .dark-mode .form-group input,
    .dark-mode .form-group textarea {
        background-color: #2d2d2d;
        color: #f5f5f5;
        border-color: #444;
    }
    
    .dark-mode .filter-btn {
        color: #f5f5f5;
    }
`;
document.head.appendChild(style);