import { DEFAULT_CANVAS_BACKGROUND } from "../constants/STYLES";

export function createCanvas(width, height){
    if(!!canvas){
        throw new Error({ name: 'game-lab error', message: 'canvas already created' })
    }else{
        canvas = document.createElement("canvas")
        context = canvas.getContext("2d")
        canvas.width = width
        canvas.height = height
        canvas.style.backgroundColor = DEFAULT_CANVAS_BACKGROUND

        const body = document.querySelector("body")
        body.appendChild(canvas)
    }
}