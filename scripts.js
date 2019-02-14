const menu = document.querySelector('.nav-menu-hamburguer');
const traco = document.querySelector('.menu-hamburguer');

const aparecer = function(){
    menu.classList.toggle('mostrarNav');
}

traco.onclick = aparecer;