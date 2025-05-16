document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const hero = document.getElementById("hero");

    window.addEventListener("scroll", () => {
        const heroBottom = hero.getBoundingClientRect().bottom;

        if (heroBottom <= 0) {
            header.classList.add("visible");
        } else {
            header.classList.remove("visible");
        }
    });
});
