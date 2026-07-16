/* ==========================================
   HAIDER PORTFOLIO
   HERO JAVASCRIPT - PART 1
========================================== */

// Wait until page is fully loaded

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

/* ==========================================
   SMOOTH SCROLL
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/* ==========================================
   HERO IMAGE PARALLAX
========================================== */

const imageCard = document.querySelector(".image-card");

document.addEventListener("mousemove",(e)=>{

    if(!imageCard) return;

    const x = (window.innerWidth / 2 - e.clientX) / 30;

    const y = (window.innerHeight / 2 - e.clientY) / 30;

    imageCard.style.transform =
    `rotateY(${x}deg) rotateX(${-y}deg)`;

});

/* ==========================================
   RESET IMAGE POSITION
========================================== */

document.addEventListener("mouseleave",()=>{

    if(!imageCard) return;

    imageCard.style.transform =
    "rotateY(0deg) rotateX(0deg)";

});
/* ==========================================
   HERO JAVASCRIPT - PART 2
========================================== */

/* ===============================
   HERO ENTRANCE ANIMATION
================================= */

const heroLeft = document.querySelector(".hero-left");
const heroRight = document.querySelector(".hero-right");

window.addEventListener("load", () => {

    if(heroLeft){

        heroLeft.animate([

            {
                opacity:0,
                transform:"translateX(-80px)"
            },

            {
                opacity:1,
                transform:"translateX(0)"
            }

        ],{

            duration:1200,
            easing:"ease",
            fill:"forwards"

        });

    }

    if(heroRight){

        heroRight.animate([

            {
                opacity:0,
                transform:"translateX(80px)"
            },

            {
                opacity:1,
                transform:"translateX(0)"
            }

        ],{

            duration:1200,
            easing:"ease",
            fill:"forwards"

        });

    }

});

/* ===============================
   BUTTON HOVER EFFECT
================================= */

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transition="0.3s";

        button.style.transform="translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0) scale(1)";

    });

});

/* ===============================
   SCROLL REVEAL
================================= */

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll("section").forEach(section=>{

    section.style.opacity="0";
    section.style.transform="translateY(60px)";
    section.style.transition="1s ease";

    observer.observe(section);

});

/* ===============================
   CONSOLE MESSAGE
================================= */

console.log("%cHaider Portfolio Loaded Successfully",
"color:#00E5FF;font-size:18px;font-weight:bold;");
/* ==========================================
   INTRODUCTION SECTION JAVASCRIPT
========================================== */

// Select Elements

const introSection = document.querySelector(".introduction");
const introItems = document.querySelectorAll(".intro-item");

/* ==========================================
   SCROLL REVEAL
========================================== */

const introObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show-intro");

        }

    });

},{
    threshold:0.25
});

if(introSection){

    introObserver.observe(introSection);

}

/* ==========================================
   HOVER EFFECT
========================================== */

introItems.forEach((card)=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px) scale(1.03)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================
   NUMBER ANIMATION
========================================== */

introItems.forEach((card)=>{

    const heading = card.querySelector("h3");

    if(!heading) return;

    card.addEventListener("mouseenter",()=>{

        heading.style.transition=".3s";

        heading.style.color="#ffffff";

    });

    card.addEventListener("mouseleave",()=>{

        heading.style.color="#00E5FF";

    });

});

/* ==========================================
   INTRO LOADED
========================================== */

console.log("Introduction Section Loaded Successfully");
/* ==========================================
   ABOUT SECTION JAVASCRIPT
========================================== */

// About Elements

const aboutSection = document.querySelector(".about");
const aboutBoxes = document.querySelectorAll(".about-box");
const aboutImage = document.querySelector(".about-image-card");

/* ==========================================
   SCROLL REVEAL
========================================== */

const aboutObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-about");

        }

    });

}, {
    threshold: 0.25
});

if (aboutSection) {

    aboutObserver.observe(aboutSection);

}

/* ==========================================
   INFO CARD HOVER EFFECT
========================================== */

aboutBoxes.forEach((box) => {

    box.addEventListener("mouseenter", () => {

        box.style.transform = "translateY(-10px) scale(1.03)";

    });

    box.addEventListener("mouseleave", () => {

        box.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   IMAGE HOVER EFFECT
========================================== */

if (aboutImage) {

    aboutImage.addEventListener("mouseenter", () => {

        aboutImage.style.transform = "translateY(-12px) scale(1.02)";

    });

    aboutImage.addEventListener("mouseleave", () => {

        aboutImage.style.transform = "translateY(0) scale(1)";

    });

}

/* ==========================================
   ABOUT SECTION LOADED
========================================== */

console.log("About Section Loaded Successfully");
/* ==========================================
   SKILLS SECTION JAVASCRIPT
========================================== */

// Skills Elements

const skillsSection = document.querySelector(".skills");
const skillCards = document.querySelectorAll(".skill-card");

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const skillsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-skills");

        }

    });

}, {
    threshold: 0.25
});

if (skillsSection) {

    skillsObserver.observe(skillsSection);

}

/* ==========================================
   PREMIUM HOVER EFFECT
========================================== */

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.transition = "0.35s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   CARD GLOW EFFECT
========================================== */

skillCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0,229,255,.12),
            rgba(255,255,255,.05) 60%
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   LOADED MESSAGE
========================================== */

console.log("Skills Section Loaded Successfully");
/* ==========================================
   SERVICES SECTION JAVASCRIPT
========================================== */

// Services Elements

const servicesSection = document.querySelector(".services");
const serviceCards = document.querySelectorAll(".service-card");

/* ==========================================
   SCROLL REVEAL
========================================== */

const servicesObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-services");

        }

    });

}, {
    threshold: 0.25
});

if (servicesSection) {

    servicesObserver.observe(servicesSection);

}

/* ==========================================
   PREMIUM HOVER EFFECT
========================================== */

serviceCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.transition = "0.35s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

serviceCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,229,255,.12),
                rgba(255,255,255,.05) 65%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("Services Section Loaded Successfully");
/* ==========================================
   PROJECTS SECTION JAVASCRIPT
========================================== */

// Projects Elements

const projectsSection = document.querySelector(".projects");
const projectCards = document.querySelectorAll(".project-card");

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const projectsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-project");

        }

    });

}, {
    threshold: 0.25
});

if (projectsSection) {

    projectsObserver.observe(projectsSection);

}

/* ==========================================
   PREMIUM HOVER EFFECT
========================================== */

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.transition = "0.35s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

projectCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(0,229,255,.14),
            rgba(255,255,255,.05) 65%
        )`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   BUTTON CLICK EFFECT
========================================== */

const projectButtons = document.querySelectorAll(".project-btn");

projectButtons.forEach((button) => {

    button.addEventListener("click", () => {

        button.style.transform = "scale(0.96)";

        setTimeout(() => {

            button.style.transform = "scale(1)";

        }, 120);

    });

});

/* ==========================================
   PROJECTS LOADED
========================================== */

console.log("Projects Section Loaded Successfully");
/* ==========================================
   MY JOURNEY SECTION JAVASCRIPT
========================================== */

// Journey Elements

const journeySection = document.querySelector(".journey");
const timelineItems = document.querySelectorAll(".timeline-item");

/* ==========================================
   SCROLL REVEAL
========================================== */

const journeyObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-journey");

        }

    });

}, {
    threshold: 0.25
});

if (journeySection) {

    journeyObserver.observe(journeySection);

}

/* ==========================================
   TIMELINE CARD HOVER EFFECT
========================================== */

timelineItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        const card = item.querySelector(".timeline-content");

        card.style.transform = "translateY(-10px) scale(1.02)";
        card.style.transition = "0.35s ease";

    });

    item.addEventListener("mouseleave", () => {

        const card = item.querySelector(".timeline-content");

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

timelineItems.forEach((item) => {

    const card = item.querySelector(".timeline-content");

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,229,255,.12),
                rgba(255,255,255,.05) 70%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("My Journey Section Loaded Successfully");
/* ==========================================
   ACHIEVEMENTS SECTION JAVASCRIPT
========================================== */

// Achievement Elements

const achievementsSection = document.querySelector(".achievements");
const achievementCards = document.querySelectorAll(".achievement-card");

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const achievementsObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-achievement");

        }

    });

}, {
    threshold: 0.25
});

if (achievementsSection) {

    achievementsObserver.observe(achievementsSection);

}

/* ==========================================
   PREMIUM HOVER EFFECT
========================================== */

achievementCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.transition = "0.35s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

achievementCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,229,255,.14),
                rgba(255,255,255,.05) 65%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   ICON ANIMATION
========================================== */

const achievementIcons = document.querySelectorAll(".achievement-icon");

achievementIcons.forEach((icon) => {

    icon.addEventListener("mouseenter", () => {

        icon.style.transform = "rotate(10deg) scale(1.12)";
        icon.style.transition = "0.3s ease";

    });

    icon.addEventListener("mouseleave", () => {

        icon.style.transform = "rotate(0deg) scale(1)";

    });

});

/* ==========================================
   LOADED MESSAGE
========================================== */

console.log("Achievements Section Loaded Successfully");
/* ==========================================
   WORK PROCESS SECTION JAVASCRIPT
========================================== */

// Work Process Elements

const processSection = document.querySelector(".work-process");
const processCards = document.querySelectorAll(".process-card");

/* ==========================================
   SCROLL REVEAL ANIMATION
========================================== */

const processObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-process");

        }

    });

}, {
    threshold: 0.25
});

if (processSection) {

    processObserver.observe(processSection);

}

/* ==========================================
   PREMIUM HOVER EFFECT
========================================== */

processCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.03)";
        card.style.transition = "0.35s ease";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   MOUSE GLOW EFFECT
========================================== */

processCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(0,229,255,.14),
                rgba(255,255,255,.05) 65%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background = "rgba(255,255,255,.05)";

    });

});

/* ==========================================
   STEP NUMBER ANIMATION
========================================== */

const processNumbers = document.querySelectorAll(".process-number");

processNumbers.forEach((number) => {

    number.addEventListener("mouseenter", () => {

        number.style.transform = "rotate(10deg) scale(1.12)";
        number.style.transition = "0.3s ease";

    });

    number.addEventListener("mouseleave", () => {

        number.style.transform = "rotate(0deg) scale(1)";

    });

});

/* ==========================================
   LOADED MESSAGE
========================================== */

console.log("Work Process Section Loaded Successfully");
/* ==========================================
   FAQ SECTION JAVASCRIPT
========================================== */

// FAQ Elements

const faqItems = document.querySelectorAll(".faq-item");
const faqQuestions = document.querySelectorAll(".faq-question");

/* ==========================================
   FAQ ACCORDION
========================================== */

faqQuestions.forEach((question) => {

    question.addEventListener("click", () => {

        const currentItem = question.parentElement;

        // Close all other items

        faqItems.forEach((item) => {

            if (item !== currentItem) {

                item.classList.remove("active");

            }

        });

        // Toggle current item

        currentItem.classList.toggle("active");

    });

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const faqSection = document.querySelector(".faq");

const faqObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-faq");

        }

    });

}, {

    threshold: 0.25

});

if (faqSection) {

    faqObserver.observe(faqSection);

}

/* ==========================================
   PREMIUM HOVER EFFECT
========================================== */

faqItems.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        item.style.transform = "translateY(-6px)";

        item.style.transition = "0.35s ease";

    });

    item.addEventListener("mouseleave", () => {

        item.style.transform = "translateY(0)";

    });

});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log("FAQ Section Loaded Successfully");
/* ==========================================
   CONTACT SECTION JAVASCRIPT
========================================== */

// Contact Form

const contactForm = document.querySelector(".contact-form");
const contactButton = document.querySelector(".contact-btn");
const contactInputs = document.querySelectorAll(
    ".contact-form input, .contact-form textarea"
);

/* ==========================================
   FORM SUBMIT
========================================== */

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        contactInputs.forEach((input) => {

            if (input.value.trim() === "") {

                valid = false;

                input.style.borderColor = "#ff4d4d";

            } else {

                input.style.borderColor = "#00E5FF";

            }

        });

        if (!valid) {

            alert("Please fill in all fields.");

            return;

        }

        contactButton.innerHTML = "Sending...";
        contactButton.disabled = true;

        setTimeout(() => {

            alert("✅ Your message has been sent successfully!");

            contactForm.reset();

            contactButton.innerHTML = "Send Message";
            contactButton.disabled = false;

            contactInputs.forEach((input) => {

                input.style.borderColor = "rgba(255,255,255,.08)";

            });

        }, 1800);

    });

}

/* ==========================================
   INPUT FOCUS EFFECT
========================================== */

contactInputs.forEach((input) => {

    input.addEventListener("focus", () => {

        input.style.boxShadow =
            "0 0 20px rgba(0,229,255,.25)";

    });

    input.addEventListener("blur", () => {

        input.style.boxShadow = "none";

    });

});

/* ==========================================
   CONTACT CARD HOVER
========================================== */

const contactCards = document.querySelectorAll(".contact-card");

contactCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});

/* ==========================================
   SCROLL REVEAL
========================================== */

const contactSection = document.querySelector(".contact");

const contactObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-contact");

        }

    });

}, {

    threshold: 0.25

});

if (contactSection) {

    contactObserver.observe(contactSection);

}

/* ==========================================
   LOADED MESSAGE
========================================== */

console.log("Contact Section Loaded Successfully");
/* ==========================================
        FOOTER SECTION JAVASCRIPT
========================================== */

// Footer Elements

const footer = document.querySelector(".footer");
const footerSocialLinks = document.querySelectorAll(".footer-social a");

/* ==========================================
   SCROLL REVEAL
========================================== */

const footerObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show-footer");

        }

    });

}, {

    threshold:0.20

});

if (footer){

    footerObserver.observe(footer);

}

/* ==========================================
   SOCIAL ICON HOVER EFFECT
========================================== */

footerSocialLinks.forEach((link)=>{

    link.addEventListener("mouseenter",()=>{

        link.style.transform="translateY(-8px) scale(1.12)";

    });

    link.addEventListener("mouseleave",()=>{

        link.style.transform="translateY(0) scale(1)";

    });

});

/* ==========================================
   CLICK ANIMATION
========================================== */

footerSocialLinks.forEach((link)=>{

    link.addEventListener("click",()=>{

        link.style.transform="scale(.92)";

        setTimeout(()=>{

            link.style.transform="translateY(-8px) scale(1.12)";

        },120);

    });

});

/* ==========================================
   FOOTER LOADED
========================================== */

console.log("Footer Loaded Successfully");
/* ================================= */
/* Navigation Bar Final JavaScript */
/* ================================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const navLinks = document.querySelectorAll(".nav-link");

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navbar.classList.toggle("active");
});

// Close Menu After Clicking a Link
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navbar.classList.remove("active");
    });
});

// Sticky Header
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});

// Active Navigation Link
navLinks.forEach(link => {
    link.addEventListener("click", function () {

        navLinks.forEach(nav => {
            nav.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
});
/* ================================= */
/* Back To Top Button Final JavaScript */
/* ================================= */

const backToTop = document.getElementById("backToTop");

// Show / Hide Button on Scroll
window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});

// Smooth Scroll to Top
backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* ================================= */
/* Apple Liquid Glass Frame - Final JavaScript */
/* ================================= */

const glassCards = document.querySelectorAll(
  ".card, .about-card, .skill-box, .service-box, .project-box, .contact-box"
);

glassCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateX = ((y / rect.height) - 0.5) * -8;
        const rotateY = ((x / rect.width) - 0.5) * 8;

        card.style.transform = `
            perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-8px)
            scale(1.02)
        `;

        card.style.background = `
            radial-gradient(
                circle at ${x}px ${y}px,
                rgba(255,255,255,0.20),
                rgba(255,255,255,0.08) 45%,
                rgba(255,255,255,0.04) 100%
            )
        `;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";
        card.style.background = "";

    });

});
