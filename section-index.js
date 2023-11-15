function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '250px'; // Ajusta este valor según el ancho deseado para tu menú
    } else {
        menu.style.width = '0px';
    }
}