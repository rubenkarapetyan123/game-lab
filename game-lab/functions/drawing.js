function background(color){
    const { width, height } = canvas.getBoundingClientRect()
    const contextColor = context.fillStyle

    context.rect(0, 0, width, height)
    context.fillStyle = color
    context.fill()

    context.fillStyle = contextColor
}

function rect(x, y, width, height){    
    context.fillRect(x, y, width, height)
}

function fill(color){
    context.fillStyle = color
}