import "../main/engine.js"
import {
    loop, noLoop, isLooping
} from "../main/engine.js"
import {
    textSize, text, fill, rect, background, circle, triangle
} from "../functions/drawing.js"
import {
    createCanvas
} from "../functions/canvas.js"
import "../eventListeners/global.js"
import "../globalVariables/utils.js"

window.textSize = textSize
window.text = text
window.fill = fill
window.rect = rect
window.background = background
window.createCanvas = createCanvas
window.loop = loop
window.noLoop = noLoop
window.isLooping = isLooping
window.circle = circle
window.triangle = triangle