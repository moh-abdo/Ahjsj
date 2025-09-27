// ملف JavaScript الرئيسي - التهيئة والإعدادات العامة
// تهيئة التطبيق عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    // تهيئة AOS (Animate On Scroll)
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true,
            offset: 100
        });
    }
    
    // إخفاء شاشة التحميل
    hideLoadingScreen();
    
    // تهيئة جميع المكونات
    initializeComponents();
});

// إخفاء شاشة التحميل
function hideLoadingScreen() {
    setTimeout(() => {
        const loadingScreen = document.getElementById('loadingScreen');
        if (loadingScreen) {
            loadingScreen.classList.add('hidden');
            setTimeout(() => {
                loadingScreen.style.display = 'none';
            }, 500);
        }
    }, 3000);
}

// تهيئة جميع المكونات
function initializeComponents() {
    // تهيئة العدادات
    if (typeof initCounters === 'function') {
        initCounters();
    }
    
    // تهيئة التنقل
    if (typeof initNavigation === 'function') {
        initNavigation();
    }
    
    // تهيئة فلترة الخدمات
    if (typeof initServiceFilters === 'function') {
        initServiceFilters();
    }
    
    // تهيئة النموذج
    if (typeof initContactForm === 'function') {
        initContactForm();
    }
    
    // تهيئة زر العودة للأعلى
    if (typeof initBackToTop === 'function') {
        initBackToTop();
    }
    
    // تهيئة البحث

}

// التمرير إلى قسم معين
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// عرض رسالة خطأ
function showError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff4757;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        errorDiv.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => errorDiv.remove(), 300);
    }, 3000);
}

// عرض رسالة نجاح

// وظائف مساعدة عامة
const Utils = {
    // التحقق من صحة البريد الإلكتروني
    validateEmail: function(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    },
    
    // التحقق من صحة رقم الجوال
    validatePhone: function(phone) {
        const phoneRegex = /^(05|5)[0-9]{8}$/;
        return phoneRegex.test(phone.replace(/\s+/g, ''));
    },
    
    // تنسيق النص
    formatText: function(text) {
        return text.trim().replace(/\s+/g, ' ');
    },
    
    // إنشاء عنصر HTML
    createElement: function(tag, className, content) {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (content) element.textContent = content;
        return element;
    },
    
    // إضافة مستمع حدث
    addEventListeners: function(elements, event, handler) {
        if (typeof elements === 'string') {
            elements = document.querySelectorAll(elements);
        }
        if (elements.length) {
            elements.forEach(element => {
                element.addEventListener(event, handler);
            });
        } else if (elements.addEventListener) {
            elements.addEventListener(event, handler);
        }
    }
};

// إضافة الأنيميشن CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes slideOutRight {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;

document.head.appendChild(style);










// وظائف التنقل وشريط التنقل

// تهيئة التنقل
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // تأثير التمرير على شريط التنقل
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // التنقل السلس
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // تحديث الرابط النشط
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // إغلاق القائمة المحمولة إذا كانت مفتوحة
                const navMenu = document.querySelector('.nav-menu');
                const hamburger = document.querySelector('.hamburger');
                if (navMenu.classList.contains('active')) {
    navMenu.classList.remove('active');
    hamburger.classList.remove('active');
    document.body.style.overflow = ''; // ✅ إعادة التمرير
}
            }
        });
    });
    
    // تحديث الرابط النشط عند التمرير
    window.addEventListener('scroll', () => {
        updateActiveNavLink();
    });
    
    // تهيئة القائمة المحمولة
    initMobileMenu();
}

// تحديث الرابط النشط
function updateActiveNavLink() {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// تهيئة القائمة المحمولة
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            toggleMenu();
        });
        
        // إغلاق القائمة عند النقر خارجها
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                if (navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            }
        });
        
        // إغلاق القائمة عند تغيير حجم الشاشة
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768 && navMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    }
}

// تبديل القائمة المحمولة
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // منع التمرير عند فتح القائمة
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }
}

// تهيئة زر العودة للأعلى
function initBackToTop() {
    // إنشاء زر العودة للأعلى إذا لم يكن موجوداً
    let backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) {
        backToTopBtn = document.createElement('button');
        backToTopBtn.id = 'backToTop';
        backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        backToTopBtn.className = 'back-to-top-btn';
        backToTopBtn.onclick = scrollToTop;
        document.body.appendChild(backToTopBtn);
        
        // إضافة الأنماط
        const style = document.createElement('style');
        style.textContent = `
            .back-to-top-btn {
                position: fixed;
                bottom: 100px;
                left: 30px;
                width: 50px;
                height: 50px;
                background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
                color: white;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 1.2rem;
                box-shadow: var(--shadow-lg);
                transition: var(--transition-normal);
                opacity: 0;
                visibility: hidden;
                transform: translateY(20px);
                z-index: 999;
            }
            
            .back-to-top-btn.show {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
            }
            
            .back-to-top-btn:hover {
                transform: translateY(-5px);
                box-shadow: var(--shadow-xl);
            }
            
            @media (max-width: 768px) {
                .back-to-top-btn {
                    bottom: 90px;
                    left: 20px;
                    width: 45px;
                    height: 45px;
                    font-size: 1rem;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    // إظهار/إخفاء الزر عند التمرير
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
}

// العودة إلى أعلى الصفحة
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}






// وظائف واتساب والتواصل

// رقم واتساب (يجب تحديثه برقم حقيقي)


        // تهيئة العدادات المؤقتة
        function initCounters() {
            const counters = document.querySelectorAll('.counter');
            const observerOptions = {
                threshold: 0.5,
                rootMargin: '0px 0px -100px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseInt(counter.getAttribute('data-target'));
                        animateCounter(counter, target);
                        observer.unobserve(counter);
                    }
                });
            }, observerOptions);
            
            counters.forEach(counter => observer.observe(counter));
        }
        
        function animateCounter(element, target) {
            let current = 0;
            const increment = target / 100;
            const duration = 2000;
            const stepTime = duration / 100;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                
                if (target < 10) {
                    element.textContent = current.toFixed(1);
                } else {
                    element.textContent = Math.floor(current);
                }
            }, stepTime);
        }

