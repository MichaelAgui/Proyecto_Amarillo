let index = 0;

function moveSlide(step) {
    const carousel = document.querySelector('.carousel');
    const images = document.querySelectorAll('.carousel img');
    index += step;

    if (index < 0) {
        index = images.length - 1;
    } else if (index >= images.length) {
        index = 0;
    }

    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Cambiar el color y el tamaño del título con interacción
function changeTitle() {
    const title = document.querySelector('.title');
    title.style.color = '#ff6600';
    title.style.transform = 'scale(1.2)';
    setTimeout(() => {
        title.style.color = '#00d4ff';
        title.style.transform = 'scale(1)';
    }, 300);
}

function redirectToSignLanguage() {
    window.location.href = 'lengua-de-senas.html';  // Redirige a la página de videos de Lengua de Señas
}
