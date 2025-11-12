// Toggle menu icon and navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

// Close menu when nav link is clicked
document.querySelectorAll(".navbar a").forEach((link) =>
    link.addEventListener("click", () => {
        menuIcon.classList.remove("bx-x");
        navbar.classList.remove("active");
    })
);

// Scroll section active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");
const header = document.querySelector("header");

window.onscroll = () => {
    header.classList.toggle("sticky", window.scrollY > 100);

    sections.forEach((sec) => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

// ScrollReveal animations
ScrollReveal({
    reset: true,
    distance: "80px",
    duration: 2000,
    delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-image, .services-container, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-image", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Typed.js animation
const typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});

// Load EmailJS library
window.addEventListener("load", function () {
    emailjs.init("yG2nMrJc7hdPXn5Pv");
});

// Handle form submission
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    console.log("Form Data:", new FormData(form)); // Optional, to debug form data

    // Send email via EmailJS
    emailjs
        .sendForm("service_mrga824", "template_t27qlsk", this)
        .then(
            function (response) {
                console.log("SUCCESS!", response);
                alert("✅ Message Sent Successfully!");
                form.reset();
            },
            function (error) {
                console.error("FAILED...", error);
                alert("❌ Message Failed. Please try again.");
            }
        );
});