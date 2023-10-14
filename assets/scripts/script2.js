const container = document.querySelector(".whatsapp-container");
const icon = document.querySelector(".whatsapp-icon");

container.addEventListener("mouseenter", () => {
    icon.style.transform = "rotate(360deg)";
});

container.addEventListener("mouseleave", () => {
    icon.style.transform = "rotate(0deg)";
});

const hamburger = document.querySelector (".hamburger");
const navigation = document.querySelector (".nav");

hamburger.addEventListener ("click", function () {
    hamburger.classList.toggle ("active");
    navigation.classList.toggle ("active");
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function () {
        hamburger.classList.remove("active");
        navigation.classList.remove("active");
    });
});