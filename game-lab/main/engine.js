function engine(){
    if(!window.draw){
        return
    }
    draw()
    loop()     
}

function loop(){
    globalEngineId = requestAnimationFrame(engine, DEFAULT_FRAMES)
}

function noLoop(){
    cancelAnimationFrame(globalEngineId)
    globalEngineId = null
}

function isLooping(){
    return !!globalEngineId
}

function onLoad(){
    setup()
    if(window.draw){
        loop()
    }
}

window.addEventListener(LOAD,onLoad)