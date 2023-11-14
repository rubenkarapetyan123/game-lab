import { DEFAULT_FRAMES } from "../constants/GLOBAL.js";
import { LOAD } from "../constants/EVENTS.js";


function engine(){
    if(!window.draw){
        return
    }
    draw()
    if(!isLoopStoped){
        loop() 
    }
}

export function loop(){
    globalEngineId = requestAnimationFrame(engine, DEFAULT_FRAMES)
    isLoopStoped = false
}

export function noLoop(){    
    cancelAnimationFrame(globalEngineId)
    globalEngineId = null
    isLoopStoped = true
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