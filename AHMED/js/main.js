// Loading Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.querySelector('.loader');
        loader.classList.add('hidden');
        document.body.style.overflow = 'visible';
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    // Prevent content flash before translations are loaded
    document.body.style.opacity = '0';
    document.body.style.overflow = 'hidden';
    
    // Initialize all functionality
    app();
    
    // Show content after initialization
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll events
const optimizedScroll = debounce(() => {
    const scrollTop = window.pageYOffset;
    
    // Sticky header
    const header = document.querySelector('header');
    if (header) {
        if (scrollTop > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    }
}, 10);

window.addEventListener('scroll', optimizedScroll);

// Theme Toggle
const themeToggle = () => {
    const themeToggleBtn = document.getElementById('themeToggle');
    const themeIcon = themeToggleBtn.querySelector('i');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeIcon.className = savedTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    }
    
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        themeIcon.className = newTheme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    });
};

// Language translations
const translations = {
    ar: {
        title: "أحمد - مطور ويب",
        logo: "أحمد",
        home: "الرئيسية",
        about: "عني",
        projects: "مشاريعي",
        skills: "مهاراتي",
        contact: "اتصل بي",
        heroTitle: "مرحباً، أنا",
        heroName: "أحمد",
        heroSubtitle: "مطور ويب",
        heroDescription: "أقوم بتصميم وتطوير مواقع الويب باستخدام HTML و CSS و JavaScript",
        viewProjects: "مشاهدة أعمالي",
        contactMe: "اتصل بي",
        aboutTitle: "عني",
        aboutText1: "أنا مطور ويب متخصص في إنشاء مواقع ويب تفاعلية وجذابة. أستخدم HTML و CSS و JavaScript لإنشاء تجارب مستخدم استثنائية.",
        aboutText2: "أسعى دائمًا لتعلم تقنيات جديدة وتحسين مهاراتي لتقديم أفضل الحلول لعملائي.",
        html5: "HTML",
        css3: "CSS",
        js: "JavaScript",
        responsive: "تصميم متجاوب",
        contactTitle: "اتصل بي",
        email: "البريد الإلكتروني",
        social: "التواصل الاجتماعي",
        message: "الرسالة",
        send: "إرسال",
        rights: "جميع الحقوق محفوظة",
        services: "خدماتي",
        webDev: "تطوير الويب",
        webDevDesc: "تصميم وتطوير مواقع ويب متجاوبة وعصرية باستخدام أحدث التقنيات",
        responsiveDesign: "تصميم متجاوب",
        responsiveDesc: "تأكد من أن موقعك يعمل بشكل مثالي على جميع الأجهزة",
        uiDesign: "تصميم واجهة المستخدم",
        uiDesc: "إنشاء واجهات مستخدم جذابة وسهلة الاستخدام",
        seo: "تحسين محركات البحث",
        seoDesc: "تحسين ظهور موقعك في نتائج محركات البحث",
        pricing: "الأسعار",
        basicPlan: "الموقع الأساسي",
        advancedPlan: "الموقع المتقدم",
        premiumPlan: "الموقع المتميز",
        oneTime: "مرة واحدة",
        fivePages: "5 صفحات",
        tenPages: "10 صفحات",
        unlimitedPages: "صفحات غير محدودة",
        contactForm: "نموذج اتصال",
        cms: "نظام إدارة المحتوى",
        advancedCms: "نظام إدارة محتوى متقدم",
        oneMonthSupport: "دعم لمدة شهر",
        threeMonthsSupport: "دعم لمدة 3 أشهر",
        sixMonthsSupport: "دعم لمدة 6 أشهر",
        ecommerce: "متجر إلكتروني",
        orderNow: "اطلب الآن",
        clients: "عملاؤنا",
        techCompany: "شركة التقنية",
        techCompanyDesc: "شركة رائدة في مجال التكنولوجيا",
        ecommerceStore: "متجر إلكتروني",
        ecommerceDesc: "أكبر متجر إلكتروني في المنطقة",
        marketingAgency: "وكالة تسويق",
        marketingDesc: "وكالة تسويق رقمية متخصصة",
        restaurant: "مطعم شهير",
        restaurantDesc: "مطعم ذو شهرة واسعة",
        all: "الكل",
        web: "مواقع الويب",
        app: "تطبيقات",
        design: "تصميم",
        project1Title: "تصميم واجهة المستخدم الإبداعية",
        project1Desc: "موقع ويب تفاعلي بتصميم عصري وألوان جذابة، تم إنشاؤه باستخدام HTML و CSS و JavaScript.",
        project2Title: "موقع المدير الفني",
        project2Desc: "تطبيق ويب متكامل لمدير فني مع واجهة مستخدم سلسة وتجربة مستخدم ممتازة وتصميم فريد.",
        project3Title: "منصة تصميم تفاعلية",
        project3Desc: "موقع ويب متجاوب يعمل على جميع الأجهزة بتصميم عصري وأنيق مع واجهة مستخدم سهلة الاستخدام.",
        preview: "معاينة",
        code: "الكود",
        html5Desc: "بناء هيكل الويب باستخدام أحدث معايير HTML5",
        css3Desc: "تصميم وتنسيق مواقع الويب باستخدام CSS3 المتقدمة",
        jsDesc: "إضافة التفاعل والحركة إلى مواقع الويب",
        testimonials: "شهادات العملاء",
        testimonial1: "أحمد مطور متميز، قام بتصميم موقعنا بشكل احترافي مع الاهتمام بكل التفاصيل. نوصي به بشدة!",
        testimonial2: "عمل رائع! أحمد يتميز بالإبداع والاحترافية في العمل. موقعنا الآن يعمل بشكل ممتاز.",
        testimonial3: "تعامل احترافي ونتائج متميزة. أحمد يقدم دائماً أفضل الحلول التقنية.",
        client1Name: "محمد أحمد",
        client1Position: "مدير شركة التقنية",
        client2Name: "سارة محمد",
        client2Position: "مالكة متجر إلكتروني",
        client3Name: "علي حسن",
        client3Position: "مدير التسويق",
        prev: "السابق",
        next: "التالي"
    },
    en: {
        title: "AHMED - Web Developer",
        logo: "AHMED",
        home: "Home",
        about: "About",
        projects: "Projects",
        skills: "Skills",
        contact: "Contact",
        heroTitle: "Hi, I'm",
        heroName: "AHMED",
        heroSubtitle: "Web Developer",
        heroDescription: "I design and develop websites using HTML, CSS, and JavaScript",
        viewProjects: "View My Work",
        contactMe: "Contact Me",
        aboutTitle: "About Me",
        aboutText1: "I am a web developer specializing in creating interactive and engaging websites. I use HTML, CSS, and JavaScript to create exceptional user experiences.",
        aboutText2: "I am always striving to learn new technologies and improve my skills to provide the best solutions for my clients.",
        html5: "HTML",
        css3: "CSS",
        js: "JavaScript",
        responsive: "Responsive Design",
        contactTitle: "Contact Me",
        email: "Email",
        social: "Social Media",
        message: "Message",
        send: "Send",
        rights: "All Rights Reserved",
        services: "Services",
        webDev: "Web Development",
        webDevDesc: "Design and develop responsive and modern websites using the latest technologies",
        responsiveDesign: "Responsive Design",
        responsiveDesc: "Ensure your website works perfectly on all devices",
        uiDesign: "UI Design",
        uiDesc: "Create attractive and user-friendly interfaces",
        seo: "SEO",
        seoDesc: "Improve your website's visibility in search engine results",
        pricing: "Pricing",
        basicPlan: "Basic Website",
        advancedPlan: "Advanced Website",
        premiumPlan: "Premium Website",
        oneTime: "one-time",
        fivePages: "5 pages",
        tenPages: "10 pages",
        unlimitedPages: "Unlimited pages",
        contactForm: "Contact form",
        cms: "Content Management System",
        advancedCms: "Advanced CMS",
        oneMonthSupport: "1 month support",
        threeMonthsSupport: "3 months support",
        sixMonthsSupport: "6 months support",
        ecommerce: "E-commerce",
        orderNow: "Order Now",
        clients: "Our Clients",
        techCompany: "Tech Company",
        techCompanyDesc: "Leading technology company",
        ecommerceStore: "E-commerce Store",
        ecommerceDesc: "Largest e-commerce store in the region",
        marketingAgency: "Marketing Agency",
        marketingDesc: "Specialized digital marketing agency",
        restaurant: "Famous Restaurant",
        restaurantDesc: "Widely renowned restaurant",
        all: "All",
        web: "Websites",
        app: "Applications",
        design: "Design",
        project1Title: "Creative UI Design",
        project1Desc: "Interactive website with modern design and attractive colors, created using HTML, CSS, and JavaScript.",
        project2Title: "Technical Manager Website",
        project2Desc: "Complete web application for a technical manager with smooth user interface, excellent user experience, and unique design.",
        project3Title: "Interactive Design Platform",
        project3Desc: "Responsive website that works on all devices with modern and elegant design and easy-to-use interface.",
        preview: "Preview",
        code: "Code",
        html5Desc: "Building web structure using the latest HTML5 standards",
        css3Desc: "Designing and styling websites using advanced CSS3",
        jsDesc: "Adding interaction and animation to websites",
        testimonials: "Client Testimonials",
        testimonial1: "AHMED is an excellent developer who designed our website professionally with attention to every detail. Highly recommended!",
        testimonial2: "Great work! AHMED excels in creativity and professionalism. Our website now works excellently.",
        testimonial3: "Professional handling and outstanding results. AHMED always provides the best technical solutions.",
        client1Name: "Mohamed Ahmed",
        client1Position: "Tech Company Manager",
        client2Name: "Sarah Mohamed",
        client2Position: "E-commerce Store Owner",
        client3Name: "Ali Hassan",
        client3Position: "Marketing Manager",
        prev: "Previous",
        next: "Next"
    },
    it: {
        title: "AHMED - Sviluppatore Web",
        logo: "AHMED",
        home: "Home",
        about: "Chi Sono",
        projects: "Progetti",
        skills: "Competenze",
        contact: "Contatti",
        heroTitle: "Ciao, sono",
        heroName: "AHMED",
        heroSubtitle: "Sviluppatore Web",
        heroDescription: "Progetto e sviluppo siti web utilizzando HTML, CSS e JavaScript",
        viewProjects: "Vedi i Miei Lavori",
        contactMe: "Contattami",
        aboutTitle: "Chi Sono",
        aboutText1: "Sono uno sviluppatore web specializzato nella creazione di siti web interattivi e coinvolgenti. Utilizzo HTML, CSS e JavaScript per creare esperienze utente eccezionali.",
        aboutText2: "Mi impegno sempre ad apprendere nuove tecnologie e migliorare le mie competenze per fornire le migliori soluzioni ai miei clienti.",
        html5: "HTML",
        css3: "CSS",
        js: "JavaScript",
        responsive: "Design Responsive",
        contactTitle: "Contattami",
        email: "Email",
        social: "Social Media",
        message: "Messaggio",
        send: "Invia",
        rights: "Tutti i Diritti Riservati",
        services: "Servizi",
        webDev: "Sviluppo Web",
        webDevDesc: "Progettazione e sviluppo di siti web responsive e moderni utilizzando le ultime tecnologie",
        responsiveDesign: "Design Responsive",
        responsiveDesc: "Assicurati che il tuo sito web funzioni perfettamente su tutti i dispositivi",
        uiDesign: "Design UI",
        uiDesc: "Creazione di interfacce utente attraenti e facili da usare",
        seo: "SEO",
        seoDesc: "Migliora la visibilità del tuo sito web nei risultati dei motori di ricerca",
        pricing: "Prezzi",
        basicPlan: "Sito Base",
        advancedPlan: "Sito Avanzato",
        premiumPlan: "Sito Premium",
        oneTime: "una tantum",
        fivePages: "5 pagine",
        tenPages: "10 pagine",
        unlimitedPages: "Pagine illimitate",
        contactForm: "Modulo di contatto",
        cms: "Sistema di Gestione dei Contenuti",
        advancedCms: "CMS Avanzato",
        oneMonthSupport: "Supporto per 1 mese",
        threeMonthsSupport: "Supporto per 3 mesi",
        sixMonthsSupport: "Supporto per 6 mesi",
        ecommerce: "E-commerce",
        orderNow: "Ordina Ora",
        clients: "I Nostri Clienti",
        techCompany: "Azienda Tecnologica",
        techCompanyDesc: "Azienda leader nel settore tecnologico",
        ecommerceStore: "Negozio E-commerce",
        ecommerceDesc: "Il più grande negozio e-commerce della regione",
        marketingAgency: "Agenzia di Marketing",
        marketingDesc: "Agenzia di marketing digitale specializzata",
        restaurant: "Ristorante Famoso",
        restaurantDesc: "Ristorante di grande fama",
        all: "Tutti",
        web: "Siti Web",
        app: "Applicazioni",
        design: "Design",
        project1Title: "Design UI Creativo",
        project1Desc: "Sito web interattivo con design moderno e colori accattivanti, creato utilizzando HTML, CSS e JavaScript.",
        project2Title: "Sito del Manager Tecnico",
        project2Desc: "Applicazione web completa per un manager tecnico con interfaccia utente fluida, ottima esperienza utente e design unico.",
        project3Title: "Piattaforma di Design Interattiva",
        project3Desc: "Sito web responsive che funziona su tutti i dispositivi con design moderno ed elegante e interfaccia facile da usare.",
        preview: "Anteprima",
        code: "Codice",
        html5Desc: "Costruzione della struttura web utilizzando gli ultimi standard HTML5",
        css3Desc: "Progettazione e stile dei siti web utilizzando CSS3 avanzato",
        jsDesc: "Aggiunta di interazione e animazione ai siti web",
        testimonials: "Testimonianze dei Clienti",
        testimonial1: "AHMED è uno sviluppatore eccellente che ha progettato il nostro sito web in modo professionale con attenzione ad ogni dettaglio. Altamente raccomandato!",
        testimonial2: "Ottimo lavoro! AHMED eccelle in creatività e professionalità. Il nostro sito web ora funziona in modo eccellente.",
        testimonial3: "Gestione professionale e risultati eccezionali. AHMED fornisce sempre le migliori soluzioni tecniche.",
        client1Name: "Mohamed Ahmed",
        client1Position: "Manager Azienda Tecnologica",
        client2Name: "Sarah Mohamed",
        client2Position: "Proprietaria Negozio E-commerce",
        client3Name: "Ali Hassan",
        client3Position: "Manager Marketing",
        prev: "Precedente",
        next: "Successivo"
    }
};

// Language switcher functionality
let currentLang = localStorage.getItem('language') || 'ar';

function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Update textarea placeholder
    const textarea = document.querySelector('textarea');
    if (textarea) {
        textarea.placeholder = textarea.getAttribute(`data-placeholder-${lang}`);
    }

    // Update current language indicator
    const langIndicator = document.querySelector('.current-lang');
    if (langIndicator) {
        langIndicator.textContent = lang.toUpperCase();
    }
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    updateLanguage(currentLang);

    // Language switcher event listeners
    const langToggle = document.getElementById('langToggle');
    const langDropdown = document.querySelector('.lang-dropdown');

    if (langToggle && langDropdown) {
        langToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            langDropdown.classList.toggle('show');
        });

        document.querySelectorAll('.lang-dropdown button').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const newLang = button.getAttribute('data-lang');
                updateLanguage(newLang);
                langDropdown.classList.remove('show');
            });
        });

        document.addEventListener('click', () => {
            langDropdown.classList.remove('show');
        });
    }
});

// Navigation Menu Toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');
        
        // Toggle Burger Animation
        burger.classList.toggle('toggle');
        
        // Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
};

// Scroll Animation
const scrollAnimation = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, {
        threshold: 0.5,
        rootMargin: "-50% 0px"
    });
    
    sections.forEach(section => {
        observer.observe(section);
    });
};

// Sticky Header
const stickyHeader = () => {
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
};

// Form Submission
const formSubmit = () => {
    // Form submission functionality removed
};

// Skill Animation
const skillAnimation = () => {
    const skills = document.querySelectorAll('.skill-item');
    const progressBars = document.querySelectorAll('.skill-progress-bar');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate progress bars
                const progressBar = entry.target.querySelector('.skill-progress-bar');
                if (progressBar) {
                    const percentage = progressBar.getAttribute('data-percentage');
                    progressBar.style.width = percentage + '%';
                }
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    skills.forEach(skill => {
        observer.observe(skill);
    });
};

// Project Hover Effect
const projectHover = () => {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.classList.add('hover');
        });
        
        project.addEventListener('mouseleave', () => {
            project.classList.remove('hover');
        });
    });
};

// Smooth Scrolling for Anchor Links
const smoothScroll = () => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const nav = document.querySelector('.nav-links');
                const burger = document.querySelector('.burger');
                if (nav.classList.contains('nav-active')) {
                    nav.classList.remove('nav-active');
                    burger.classList.remove('toggle');
                }
            }
        });
    });
};

// Testimonial Slider
const testimonialSlider = () => {
    const slider = document.querySelector('.testimonials-slider');
    const cards = document.querySelectorAll('.testimonial-card');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Initialize first card
    cards[0].classList.add('active');
    
    const showCard = (index) => {
        cards.forEach(card => card.classList.remove('active'));
        cards[index].classList.add('active');
    };
    
    const nextCard = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        showCard(currentIndex);
    };
    
    const prevCard = () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        showCard(currentIndex);
    };
    
    // Auto slide every 5 seconds
    let autoSlide = setInterval(nextCard, 5000);
    
    // Reset auto slide timer on manual navigation
    const resetTimer = () => {
        clearInterval(autoSlide);
        autoSlide = setInterval(nextCard, 5000);
    };
    
    // Event listeners
    nextBtn.addEventListener('click', () => {
        nextCard();
        resetTimer();
    });
    
    prevBtn.addEventListener('click', () => {
        prevCard();
        resetTimer();
    });
    
    // Touch swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    const handleSwipe = () => {
        if (touchEndX < touchStartX) {
            nextCard();
        } else if (touchEndX > touchStartX) {
            prevCard();
        }
        resetTimer();
    };
};

// Project Filtering
const projectFilter = () => {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('visible');
                    }, 100);
                } else {
                    card.classList.remove('visible');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
};

// Project Animation on Scroll
const projectAnimation = () => {
    const projects = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    projects.forEach(project => {
        observer.observe(project);
    });
};

// Initialize All Functions
const app = () => {
    themeToggle();
    navSlide();
    scrollAnimation();
    stickyHeader();
    formSubmit();
    skillAnimation();
    projectHover();
    smoothScroll();
    testimonialSlider();
    projectFilter();
    projectAnimation();
};
