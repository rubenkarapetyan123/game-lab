import { DEFAULT_FRAMES } from "../constants/GLOBAL.js";
import { LOAD } from "../constants/EVENTS.js";

function engine(){
    _loop()
    draw()
}

export function _loop(){
    requestAnimationFrame(engine, DEFAULT_FRAMES)
}

function onLoad(){
    try{        
        setup()
        _loop()
    }catch(err){

    }
}

window.addEventListener(LOAD,onLoad)