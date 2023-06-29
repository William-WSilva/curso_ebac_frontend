const botaoMenu = document.querySelector(".mobile_menu");
const menu = document.querySelector(".menu");

botaoMenu.addEventListener("click", function(evento) {
    evento.preventDefault();

    menu.classList.toggle("active");
});
