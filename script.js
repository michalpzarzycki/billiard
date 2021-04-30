import Canvas from './Canvas.js'

const poolCanvas = new Canvas();
let image = new Image();
image.src="./table.png"
setTimeout(() => {
    poolCanvas.draw(image, 0, 0)
}, 1000)