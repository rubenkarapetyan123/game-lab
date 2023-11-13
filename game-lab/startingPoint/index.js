import "../main/engine.js"
import {
    textSize, text, fill, rect, background
} from "../functions/drawing.js"
import {
    createCanvas
} from "../functions/canvas.js"
import "../eventListeners/global.js"


window.textSize = textSize
window.text = text
window.fill = fill
window.rect = rect
window.background = background
window.createCanvas = createCanvas