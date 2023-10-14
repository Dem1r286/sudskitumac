const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    loop: true,
    
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
 
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
