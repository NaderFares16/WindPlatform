// CARROSSEL

const images = document.querySelectorAll('.carousel-slide img');
let currentIndex = 0;
const transitionTime = 8000;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

showImage(currentIndex);
setInterval(nextImage, transitionTime);

// BOTÃO FLUTUANTE

// Captura o botão
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Função para monitorar o scroll e mostrar/esconder o botão
window.onscroll = function() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollToTopBtn.classList.add('show');
        scrollToTopBtn.classList.remove('hide');
    } else {
        scrollToTopBtn.classList.add('hide');
        scrollToTopBtn.classList.remove('show');
    }
};

// Função para retornar ao topo suavemente
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Animação suave
    });
});