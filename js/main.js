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
    if (window.scrollY > document.querySelector("#hero").clientHeight + 100) {
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
