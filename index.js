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
    setTimeout(showSlides, 5000); // Cambia cada 5 segundos
}
