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
