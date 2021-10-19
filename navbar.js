const bars = document.querySelector(".bars-logo");
const navMenu = document.querySelector(".nav-menu");

bars.addEventListener("click", mobileMenu);

function mobileMenu() {
    bars.classList.toggle("active");
    navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    bars.classList.remove("active");
    navMenu.classList.remove("active");
}
