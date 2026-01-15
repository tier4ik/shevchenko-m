// Antiblink setup
window.addEventListener('DOMContentLoaded', visualSetup);
function visualSetup() {
    const body = document.querySelector('.body');
    body.classList.remove('body_hidden');
}

if (!navigator.userAgentData.mobile) {
    new HoverManager(); 
}
