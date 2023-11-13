import { DEFAULT_FRAMES } from "../constants/GLOBAL.js";
import { globalEngineId } from "../globalVariables/globalVariables.js"
import { LOAD } from "../constants/EVENTS.js";


function engine(){
    if(!window.draw){
        return
    }
    draw()
    loop()     
}

export function loop(){
    globalEngineId = requestAnimationFrame(engine, DEFAULT_FRAMES)
}

export function noLoop(){
    cancelAnimationFrame(globalEngineId)
    globalEngineId = null
}

export function isLooping(){
    return !!globalEngineId
}

function onLoad(){
    setup()
    if(window.draw){
        loop()
    }
}

window.addEventListener(LOAD,onLoad)