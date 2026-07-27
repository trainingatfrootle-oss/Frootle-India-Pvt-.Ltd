/* ==========================================
   FROOTLE INFINITY
   app.js
========================================== */

// =======================
// Loader
// =======================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 700);

    }

});

// =======================
// Lenis Smooth Scroll
// =======================

if (typeof Lenis !== "undefined") {

    const lenis = new Lenis({

        duration: 1.2,

        smoothWheel: true

    });

    function raf(time) {

        lenis.raf(time);

        requestAnimationFrame(raf);

    }

    requestAnimationFrame(raf);

}

// =======================
// Navbar Blur on Scroll
// =======================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background = "rgba(0,0,0,.85)";
        header.style.backdropFilter = "blur(25px)";

    } else {

        header.style.background = "rgba(0,0,0,.35)";
        header.style.backdropFilter = "blur(18px)";

    }

});

// =======================
// Mobile Menu
// =======================

const menu = document.querySelector(".menu");

const nav = document.querySelector(".navbar ul");

if (menu && nav) {

    menu.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

// =======================
// GSAP Scroll Animations
// =======================

if (typeof gsap !== "undefined") {

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray("section").forEach(section => {

        gsap.from(section, {

            opacity: 0,

            y: 80,

            duration: 1,

            ease: "power3.out",

            scrollTrigger: {

                trigger: section,

                start: "top 80%"

            }

        });

    });

}

// =======================
// Hero Parallax
// =======================

const hero = document.querySelector(".hero");

if (hero) {

    window.addEventListener("mousemove", (e) => {

        const x = (e.clientX / window.innerWidth - 0.5) * 20;

        const y = (e.clientY / window.innerHeight - 0.5) * 20;

        hero.style.transform = `translate(${x}px, ${y}px)`;

    });

}
/* ==========================================
   PART 2
   Premium Interactions
========================================== */

// =======================
// Animated Statistics Counter
// =======================

const counters = document.querySelectorAll(".stat h2");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = parseInt(counter.innerText.replace(/\D/g, ""));

        if (isNaN(target)) return;

        let current = 0;

        const increment = Math.max(1, Math.ceil(target / 80));

        const suffix = counter.innerText.replace(/[0-9]/g, "");

        const timer = setInterval(() => {

            current += increment;

            if (current >= target) {

                current = target;

                clearInterval(timer);

            }

            counter.innerText = current + suffix;

        }, 25);

        counterObserver.unobserve(counter);

    });

}, {

    threshold: 0.5

});

counters.forEach(counter => counterObserver.observe(counter));


// =======================
// Active Navigation Link
// =======================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href && href.includes(current)) {

            link.classList.add("active");

        }

    });

});


// =======================
// Reveal Elements
// =======================

const revealItems = document.querySelectorAll(

".brand-card,.service-card,.why-card,.timeline-item,.stat,.testimonial-card"

);

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";

            entry.target.style.transform = "translateY(0)";

        }

    });

}, {

    threshold: .15

});

revealItems.forEach(item => {

    item.style.opacity = "0";

    item.style.transform = "translateY(60px)";

    item.style.transition = ".8s ease";

    revealObserver.observe(item);

});


// =======================
// Hero Button Ripple
// =======================

document.querySelectorAll(".hero-btn").forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "translateY(-6px) scale(1.03)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "";

    });

});


// =======================
// Footer Year
// =======================

const copyright = document.querySelector(".copyright");

if(copyright){

    copyright.innerHTML =
    `© ${new Date().getFullYear()} Frootle India Pvt. Ltd. All Rights Reserved.`;

}
