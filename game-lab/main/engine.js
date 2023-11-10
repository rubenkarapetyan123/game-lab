function engine(){
    loop()
    try{        
        draw()
    }catch(err){

    }
}

function loop(){
    globalEngineId = requestAnimationFrame(engine, DEFAULT_FRAMES)
}

function noLoop(){
    cancelAnimationFrame(globalEngineId)
}

function onLoad(){
    setup()
    try{        
        loop()
    }catch(err){

    }
}

window.addEventListener(LOAD,onLoad)