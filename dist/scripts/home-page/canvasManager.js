class CanvasManager {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.prisms = [];
        this.background = null;
    }
    setupBackground() {
        this.background = this.context.createLinearGradient(0, 0, canvas.width, canvas.height);
        this.background.addColorStop(0, '#00d2ff');
        this.background.addColorStop(1, '#3a7bd5');
    }
    drawBackground() {
        this.context.fillStyle = this.background;
        this.context.fillRect(0, 0, canvas.width, canvas.height); 
    }
    addPrisms() {
        const prismsCount = Math.floor(window.innerWidth / 10);
        for (let index = 0; index < prismsCount; index++) {
            this.prisms.push(new Prism(this.canvas, this.context));
        }
    }
    drawStaticPrisms() {
        this.drawBackground();
        this.prisms.forEach(prism => {
            prism.drawPrism();
            prism.drawConnections(this.prisms);
        })
    }
    drawAll() {
        this.drawBackground();
        this.prisms.forEach(prism => {
            prism.drawPrism();
            prism.drawConnections(this.prisms);
            prism.movePrism();
        })
        window.requestAnimationFrame(this.drawAll.bind(this));
    }
}