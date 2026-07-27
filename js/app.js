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
/* ==========================================
   PART 3
   Premium UI Effects
========================================== */

// =======================
// Scroll Progress Bar
// =======================

const progressBar = document.createElement("div");

progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "3px";
progressBar.style.width = "0%";
progressBar.style.background = "#ffffff";
progressBar.style.zIndex = "99999";
progressBar.style.transition = "width .15s linear";

document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {

    const scrollTop = window.scrollY;

    const docHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

    const progress = (scrollTop / docHeight) * 100;

    progressBar.style.width = progress + "%";

});


// =======================
// Back To Top Button
// =======================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.style.position = "fixed";
topBtn.style.right = "30px";
topBtn.style.bottom = "30px";
topBtn.style.width = "55px";
topBtn.style.height = "55px";
topBtn.style.borderRadius = "50%";
topBtn.style.border = "1px solid rgba(255,255,255,.2)";
topBtn.style.background = "#111";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.opacity = "0";
topBtn.style.pointerEvents = "none";
topBtn.style.transition = ".35s";
topBtn.style.zIndex = "9999";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.opacity = "1";
        topBtn.style.pointerEvents = "all";

    } else {

        topBtn.style.opacity = "0";
        topBtn.style.pointerEvents = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


// =======================
// Mouse Glow
// =======================

const glow = document.createElement("div");

glow.style.position = "fixed";
glow.style.width = "250px";
glow.style.height = "250px";
glow.style.borderRadius = "50%";
glow.style.pointerEvents = "none";
glow.style.background =
"radial-gradient(circle, rgba(255,255,255,.08), transparent 70%)";
glow.style.transform = "translate(-50%,-50%)";
glow.style.zIndex = "0";
glow.style.transition = "transform .08s linear";

document.body.appendChild(glow);

window.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});


// =======================
// Magnetic Buttons
// =======================

document.querySelectorAll(".hero-btn").forEach(button=>{

button.addEventListener("mousemove",(e)=>{

const rect=button.getBoundingClientRect();

const x=e.clientX-rect.left-rect.width/2;

const y=e.clientY-rect.top-rect.height/2;

button.style.transform=`translate(${x*.15}px,${y*.15}px)`;

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translate(0,0)";

});

});


// =======================
// Console Signature
// =======================

console.log(
"%cFROOTLE INFINITY",
"font-size:22px;font-weight:bold;color:white;background:black;padding:8px 14px;border-radius:6px;"
);

console.log(
"%cDesigned with ❤️ using HTML, CSS, GSAP & JavaScript",
"color:#999;font-size:13px;"
);
    copyright.innerHTML =
    `© ${new Date().getFullYear()} Frootle India Pvt. Ltd. All Rights Reserved.`;

}
