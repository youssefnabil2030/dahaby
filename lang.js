const translations = {
    "hero-title": {
        "ar": "استثمر في الذهب بذكاء",
        "en": "Invest in Gold Smartly"
    },
    "hero-desc": {
        "ar": "منصة دهبى تقدم لك حلول مبتكرة لتداول الذهب في السوق المحلي والعالمي",
        "en": "Dahabey platform offers innovative solutions for gold trading locally and globally"
    },
    "download-btn": {
        "ar": "حمل التطبيق",
        "en": "Download App"
    },
    "features-title": {
        "ar": "لماذا دهبى؟",
        "en": "Why Dahabey?"
    },
    "services-title": {
        "ar": "خدماتنا",
        "en": "Our Services"
    },
    "cta-title": {
        "ar": "حمل تطبيق دهبى الآن",
        "en": "Download Dahabey Now"
    },
    "cta-desc": {
        "ar": "متوفر على جميع الأجهزة الذكية",
        "en": "Available on all smart devices"
    },
    "contact-title": {
        "ar": "تواصل معنا",
        "en": "Contact Us"
    },
    "contact-name": {
        "ar": "اسم ثلاثي",
        "en": "Full Name"
    },
    "contact-email": {
        "ar": "بريد الالكتروني",
        "en": "Email"
    },
    "contact-phone": {
        "ar": "رقم هاتف",
        "en": "Phone Number"
    },
    "contact-message": {
        "ar": "رسالتك",
        "en": "Your Message"
    },
    "contact-submit": {
        "ar": "ارسال",
        "en": "Send"
    }
    // Add more keys for all texts
};

const langButtons = document.querySelectorAll(".language-switcher button");

langButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const lang = btn.id.split("-")[1]; // "ar" or "en"
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

        // Update all text content
        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.getAttribute("data-key");
            if(translations[key] && translations[key][lang]) {
                el.textContent = translations[key][lang];
            }
        });

        // Toggle active class
        langButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});
