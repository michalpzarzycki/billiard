class Canvas {
    constructor() {
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d');
    }
   
    draw(image, positionX, positionY, width, height) {
        this.ctx.drawImage(image, positionX, positionY, width, height)
    }
    clear() {
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
    }
}

export default Canvas;