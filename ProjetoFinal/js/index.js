let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controlos
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail controlos da imagem
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("aldeiaSlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

function login(){
    alert("Login");
}
function register(){
    alert("Registo");
}