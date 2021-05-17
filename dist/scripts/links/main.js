// Antiblink setup
window.addEventListener('DOMContentLoaded', visualSetup);
function visualSetup() {
    const body = document.querySelector('.body');
    body.classList.remove('body_hidden');
}

const items = document.querySelectorAll('.links__item');
items.forEach(item => {
    item.style.animationDelay = Math.random().toFixed(2) + 's'
});