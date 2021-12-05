/* ==================================
- Navbar
================================== */

const navbar = document.querySelector(".navbar");
const navbarCollapse = navbar.querySelector(".navbar_collapse");
const menuToggler = navbar.querySelector(".menu_toggler");
const togglerIcon = menuToggler.querySelector("#toggler_icon");
const navLinks = navbarCollapse.querySelectorAll(".nav_link");

menuToggler.addEventListener("click", function () {
    navbarCollapse.classList.toggle("show");
    menuToggler.classList.toggle("toggled");

    togglerIcon.classList.toggle("fi-rr-align-right");
    togglerIcon.classList.toggle("fi-rr-cross");
});

navLinks.forEach((link) => {
    link.addEventListener("click", function () {
        navbarCollapse.classList.remove("show");
        menuToggler.classList.remove("toggled");

        togglerIcon.classList.remove("fi-rr-cross");
        togglerIcon.classList.add("fi-rr-align-right");
    });
});

window.addEventListener("scroll", function () {
    if (window.scrollY > 250) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
        navbarCollapse.classList.remove("show");
        menuToggler.classList.remove("toggled");

        togglerIcon.classList.remove("fi-rr-cross");
        togglerIcon.classList.add("fi-rr-align-right");
    }
});

/* ==================================
- Testimonial
================================== */

const testimonial = document.querySelector("#testimonial");
const prevButton = testimonial.querySelector(".prev_button");
const nextButton = testimonial.querySelector(".next_button");

let activeTestimonial = 0;
let testimonialCards = document.querySelectorAll(".testimonial_card");

prevButton.addEventListener("click", function () {
    if (activeTestimonial > 0) {
        activeTestimonial -= 1;
        testimonialCards[activeTestimonial + 1].classList.remove("active");
        testimonialCards[activeTestimonial].classList.add("active");
    } else {
        activeTestimonial = testimonialCards.length - 1;
        testimonialCards[0].classList.remove("active");
        testimonialCards[activeTestimonial].classList.add("active");
    }
});

nextButton.addEventListener("click", function () {
    if (activeTestimonial < testimonialCards.length - 1) {
        activeTestimonial += 1;
        testimonialCards[activeTestimonial - 1].classList.remove("active");
        testimonialCards[activeTestimonial].classList.add("active");
    } else {
        activeTestimonial = 0;
        testimonialCards[testimonialCards.length - 1].classList.remove(
            "active"
        );
        testimonialCards[activeTestimonial].classList.add("active");
    }
});

setInterval(() => {
    nextButton.click();
}, 3250);

/* ==================================
- Page Scroll
================================== */

const pageScroll = document.querySelectorAll(".page_scroll");

pageScroll.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        const href = e.target.getAttribute("href");

        const scrollTop = document.querySelector(href).offsetTop;

        scroll({
            top: scrollTop - 85,
            behavior: "smooth",
        });
    });
});

/* ==================================
- Init AOS
================================== */

AOS.init({
    once: true,
});
