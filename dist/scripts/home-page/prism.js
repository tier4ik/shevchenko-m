class Prism {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.context = context;
        this.size = Math.random() * 10 + 10;

        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        
        this.velocityX = Math.random() < 0.5 ?
            20 / (this.size * 2) * -1:
            20 / (this.size * 2);
        this.velocityY = Math.random() < 0.5 ?
            20 / (this.size * 2) * -1:
            20 / (this.size * 2);
    }
    drawPrism() {
        function drawShape(prism, prismSize, catetSize, color) {
            prism.context.fillStyle = color;
            prism.context.beginPath();
            prism.context.moveTo(prism.x + prismSize, prism.y);
            prism.context.lineTo(prism.x + catetSize, prism.y + catetSize);
            prism.context.lineTo(prism.x, prism.y + prismSize);
            prism.context.lineTo(prism.x - catetSize, prism.y + catetSize);
            prism.context.lineTo(prism.x - prismSize, prism.y);
            prism.context.lineTo(prism.x - catetSize, prism.y - catetSize);
            prism.context.lineTo(prism.x, prism.y - prismSize);
            prism.context.lineTo(prism.x + catetSize, prism.y - catetSize);
            prism.context.lineTo(prism.x + prismSize, prism.y);
            prism.context.fill();
        }
        const outerCatet = this.size * Math.sin(Math.PI * 45 / 180);
        drawShape(this, this.size, outerCatet, 'rgba(3, 46, 66, .2)');
        const innerCatet = (this.size - 6) * Math.sin(Math.PI * 45 / 180);
        drawShape(this, this.size - 6, innerCatet, 'rgba(255, 255, 255, .3)');
    }
    movePrism() {
        if (this.x <= 0 || this.x >= this.canvas.width) {
            this.velocityX = -1 * this.velocityX;
        }
        if (this.y <= 0 || this.y >= this.canvas.height) {
            this.velocityY = -1 * this.velocityY;
        }
        this.x += this.velocityX;
        this.y += this.velocityY;
    }
    drawConnections(siblings) {
        siblings.forEach(sibling => {
            if (this.x == sibling.x && this.y == sibling.y) return;
            const catetA = Math.abs(sibling.x - this.x);
            const catetB = Math.abs(sibling.y - this.y);
            const dist = Math.sqrt(catetA ** 2 + catetB ** 2);
            if (dist < 150) {
                this.context.strokeStyle = 'rgba(21,101,192, .3)';
                
                this.context.beginPath();
                this.context.moveTo(this.x, this.y);
                this.context.lineTo(sibling.x, sibling.y);
                this.context.stroke();
            }
        });
    }
}