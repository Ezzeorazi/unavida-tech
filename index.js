function toggleMenu() {
    var menu = document.getElementById("sideMenu");
    if (menu.style.width === '0px' || menu.style.width === '') {
        menu.style.width = '250px'; // Ajusta este valor según el ancho deseado para tu menú
    } else {
        menu.style.width = '0px';
    }
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "block";  
    setTimeout(showSlides, 10000); // Cambia cada 10 segundos
}

const phrases = ["nativa digital.", "multicultural."];
let currentPhrase = 0;
let currentCharacter = 0;
const typedText = document.getElementById("typed-text");
const typingDelay = 80;
const erasingDelay = 50;
const newTextDelay = 2000; // Delay entre palabras

function type() {
  if (currentCharacter < phrases[currentPhrase].length) {
    typedText.textContent += phrases[currentPhrase].charAt(currentCharacter);
    currentCharacter++;
    setTimeout(type, typingDelay);
  } else {
    // Espera antes de empezar a borrar
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (currentCharacter > 0) {
    typedText.textContent = phrases[currentPhrase].substring(0, currentCharacter - 1);
    currentCharacter--;
    setTimeout(erase, erasingDelay);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length; // Cambia a la siguiente frase
    setTimeout(type, typingDelay + 1100);
  }
}

// Inicia el efecto al cargar la página
document.addEventListener("DOMContentLoaded", function() {
  if (phrases.length) setTimeout(type, newTextDelay + 250);
});


let index2 = 0;

function showSlides2() {
  const slides2 = document.querySelectorAll('.carousel-item');
  if (index2 >= slides2.length) index2 = 0;
  if (index2 < 0) index2 = slides2.length - 1;
  for (let slide2 of slides2) {
    slide2.style.transform = `translateX(${-index2 * 100}%)`;
  }
}



// Iniciar el carrusel automáticamente
setInterval(function() {
  index2++;
  showSlides2();
}, 5000); // Cambia cada 5 segundos


// function toggleSections(activeSectionId) {
//   // Obtén todas las secciones
//   var sections = document.querySelectorAll('.carrusel, .flecha, .flecha-text, .carousel-container, .carousel-text2, .linea-flecha-arriba');

//   // Oculta todas las secciones
//   sections.forEach(function(section) {
//       section.style.display = 'none';
//   });

//   // Muestra la sección activa
//   var activeSection = document.getElementById(activeSectionId);
//   activeSection.style.display = 'block'; // o 'relative' si es necesario
// }
