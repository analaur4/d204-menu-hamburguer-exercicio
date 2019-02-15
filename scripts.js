const navMenuHamburguer = document.querySelector('.nav-menu-hamburguer');
const menuHamburguer = document.querySelector('.menu-hamburguer');

const atualizarMenu = function(){
    navMenuHamburguer.classList.toggle('mostrarNav');
    menuHamburguer.classList.toggle('ativo');
}

menuHamburguer.onclick = atualizarMenu;