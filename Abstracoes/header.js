document.addEventListener("DOMContentLoaded", () => {
    const menuSidebar = document.getElementById("menuSidebar");
    const menuToggle = document.getElementById("menuToggle");
    const closeMenu = document.getElementById("closeMenu");

    if (menuToggle && menuSidebar && closeMenu) {
        // Abre o menu
        menuToggle.addEventListener("click", () => {
            menuSidebar.classList.add("active");
            console.log("Menu aberto");
        });

        // Fecha o menu
        closeMenu.addEventListener("click", () => {
            menuSidebar.classList.remove("active");
            console.log("Menu fechado");
        });
    } else {
        console.error("Erro: Elementos do menu não encontrados.");
    }
});