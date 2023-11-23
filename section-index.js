function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '250px'; // Ajusta este valor según el ancho deseado para tu menú
    } else {
        menu.style.width = '0px';
    }
}

document.querySelectorAll('.contact').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault(); // Previene el comportamiento de salto por defecto
      const targetId = this.getAttribute('href'); // Obtiene el ID del elemento de destino, como '#contact'
      const targetElement = document.querySelector(targetId); // Encuentra el elemento en el DOM
  
      // Desplazamiento suave hacia el elemento de destino
      targetElement.scrollIntoView({ 
        behavior: 'smooth' 
      });
    });
  });

  window.addEventListener('load', function() {
    var loadingScreen = document.getElementById('loadingScreen');
    if (loadingScreen) {
      loadingScreen.style.display = 'none';
    }
  });