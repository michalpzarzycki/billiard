import Canvas from './Canvas.js'

const poolCanvas = new Canvas();
let table = new Image();
table.src="./images/table.png"
let stick = new Image();
stick.src="./images/stick.png"
let whiteBall = new Image();
whiteBall.src="./images/white_ball.png"
setTimeout(() => {
    poolCanvas.draw(table, 0, 0,1000, 500)
    poolCanvas.draw(stick, 0, 0, 350, 50)
    poolCanvas.draw(whiteBall, 0, 0, 35, 35)
}, 1000)