const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', changeCanvas);

function changeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const canvasManager = new CanvasManager(canvas, ctx);
canvasManager.setupBackground();
canvasManager.addPrisms();
// If viewport is wider than 768px play animation
if ( window.innerWidth > 768 ) {
    canvasManager.drawAll();    
} else {
    canvasManager.drawStaticPrisms();
}
