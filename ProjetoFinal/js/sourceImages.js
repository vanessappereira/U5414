const imagesAlmeida = {
    "Almeida": [
        { src: "../images/almeida/o-cacador.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida1.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida2.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida3.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida4.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida5.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida6.jpg", alt: "Almeida Imagens" },
        { src: "../images/almeida/almeida7.jpg", alt: "Almeida Imagens" }
    ],
    "Castelo Rodrigo": [
        { src: "../images/castelo rodrigo/taverna-da-matilde.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo1.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo2.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo3.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo4.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo5.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo6.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo7.jpg", alt: "Castelo Rodrigo Imagens" },
        { src: "../images/castelo rodrigo/castelo_rodrigo8.jpg", alt: "Castelo Rodrigo Imagens" }
    ],
    "Linhares da Beira": [
        { src: "../images/linhares da beira/Cova-da-Loba.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares1.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares2.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares3.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares4.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares5.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares6.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares7.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares8.jpg", alt: "Linhares da Beira Imagens" },
        { src: "../images/linhares da beira/linhares9.jpg", alt: "Linhares da Beira Imagens" }
    ],
    "Marialva": [
        { src: "../images/marialva/PedeCabra.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva1.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva2.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva3.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva4.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva5.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva6.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva7.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva8.jpg", alt: "Marialva Imagens" },
        { src: "../images/marialva/marialva9.jpg", alt: "Marialva Imagens" }
    ],
};

let slideIndex = 0;

function showSlides() {
    const slideshowContainer = document.getElementById("slideshowContainer");
    const dotContainer = document.getElementById("dotContainer");

    // Clear existing content
    slideshowContainer.innerHTML = '';
    dotContainer.innerHTML = '';

    // Create image elements and dots
    imagesAlmeida.forEach((image, index) => {
        const slideDiv = document.createElement("div");
        slideDiv.className = "aldeiaSlides";

        const img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;

        slideDiv.appendChild(img);
        slideshowContainer.appendChild(slideDiv);

        // Create dot
        const dot = document.createElement("span");
        dot.className = "dot";
        dot.onclick = () => currentSlide(index + 1); // Adjust index for 1-based slide
        dotContainer.appendChild(dot);
    });

    showCurrentSlide();
}

function showCurrentSlide() {
    const slides = document.getElementsByClassName("aldeiaSlides");
    const dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = (i === slideIndex) ? "block" : "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex].className += " active";
}

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex >= imagesAlmeida.length) slideIndex = 0;
    if (slideIndex < 0) slideIndex = imagesAlmeida.length - 1;
    showCurrentSlide();
}

function currentSlide(n) {
    slideIndex = n - 1;
    showCurrentSlide();
}

// Initialize the slideshow
showSlides();