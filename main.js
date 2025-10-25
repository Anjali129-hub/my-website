const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

if (menuBtn && navLinks) {
    const menuBtnIcon = menuBtn.querySelector("i");

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");

        const isOpen = navLinks.classList.contains("open");
        if (menuBtnIcon) {
            menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
        }
    });

    navLinks.addEventListener("click", (e) => {
        navLinks.classList.remove("open");
        if (menuBtnIcon) menuBtnIcon.setAttribute("class", "ri-menu-line");
    });
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

// Header
ScrollReveal().reveal(".header__content h1", { 
    ...scrollRevealOption 
});
ScrollReveal().reveal(".header__content .section__description", { 
    ...scrollRevealOption, delay: 300 
});
ScrollReveal().reveal(".header__btns", { 
    ...scrollRevealOption, delay: 600 
});

// Services
ScrollReveal().reveal(".service__card", {
     ...scrollRevealOption, interval: 500 
});
ScrollReveal().reveal(".service__btn", { 
    ...scrollRevealOption, delay: 1000 
});

// About
ScrollReveal().reveal(".about__container .section__header", { 
    ...scrollRevealOption 
});
ScrollReveal().reveal(".about__list li", { 
    ...scrollRevealOption, delay: 300, interval: 400 
});

// Portfolio
ScrollReveal().reveal(".portfolio__container .section__header", { 
    ...scrollRevealOption 
});
ScrollReveal().reveal(".portfolio__container .section__description", { 
    ...scrollRevealOption, delay: 300 
});
ScrollReveal().reveal(".portfolio__image", { 
    ...scrollRevealOption, origin: "right", delay: 600 
});
ScrollReveal().reveal(".portfolio__list li", { 
    ...scrollRevealOption, interval: 800, delay: 400 
});
ScrollReveal().reveal(".portfolio__card", { 
    ...scrollRevealOption, interval: 500, delay: 300 
});

// Contact
ScrollReveal().reveal(".contact__container .section__header", { 
    ...scrollRevealOption 
});
ScrollReveal().reveal(".contact__container .section__description", { 
    ...scrollRevealOption, delay: 200 
});
ScrollReveal().reveal(".contact__info", { 
    ...scrollRevealOption, origin: "left", delay: 400 
});
ScrollReveal().reveal(".contact__form", { 
    ...scrollRevealOption, origin: "right", delay: 600 
});
// Our Clients
ScrollReveal().reveal(".clients__section .section__header", { 
    ...scrollRevealOption 
});
ScrollReveal().reveal(".clients__section .section__description", { 
    ...scrollRevealOption, delay: 200 
});
ScrollReveal().reveal(".clients__scroll__wrapper", { 
    ...scrollRevealOption, delay: 400, origin: "bottom" 
});
