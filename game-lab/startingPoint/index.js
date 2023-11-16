import "../globalVariables/utils.js"
import "../globalVariables/globalVariables"
import "../main/engine.js"
import {
    loop, noLoop, isLooping
} from "../main/engine.js"
import {
    textSize, text, fill, rect, background, circle, triangle, ellipse, stroke, strokeWeight, noStroke, noFill
} from "../functions/drawing.js"
import {
    createCanvas, rotate, translate
} from "../functions/canvas.js"
import "../eventListeners/global.js"
import { 
    loadSound 
} from "../functions/audio.js"
import { image, loadImage } from "../functions/image.js"
import { sin, cos, map, angleMode, dist, push, pop, scale, random } from "../functions/utils.js";

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
window.loadSound = loadSound
window.loadImage = loadImage
window.image = image
window.ellipse = ellipse
window.sin = sin
window.cos = cos
window.map = map
window.angleMode = angleMode
window.dist = dist
window.rotate = rotate
window.push = push
window.pop = pop
window.translate = translate
window.stroke = stroke
window.strokeWeight = strokeWeight
window.noStroke = noStroke
window.noFill = noFill
window.scale = scale
window.random = random