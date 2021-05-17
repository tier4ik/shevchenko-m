// Antiblink setup
window.addEventListener('DOMContentLoaded', visualSetup);
function visualSetup() {
    const body = document.querySelector('.body');
    body.classList.remove('body_hidden');
}

if (window.innerWidth > 768) {
    new HoverManager(); 
}
