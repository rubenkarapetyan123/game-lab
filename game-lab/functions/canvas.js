import { DEFAULT_CANVAS_BACKGROUND } from "../constants/STYLES";
import { getRadians } from "./utils";

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

        window.width = width
        window.height = height
    }
}

export function rotate(angle){
    const radians = getRadians(angle)
    context.rotate(radians)
}