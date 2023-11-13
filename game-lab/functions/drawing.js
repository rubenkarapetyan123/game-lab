export function background(color){
    const { width, height } = canvas.getBoundingClientRect()
    const contextColor = context.fillStyle

    context.rect(0, 0, width, height)
    context.fillStyle = color
    context.fill()

    context.fillStyle = contextColor
}
export function rect(x, y, width, height){    
    context.fillRect(x, y, width, height)
}
export function fill(color){
    context.fillStyle = color
}
export function text(text, x, y){
    context.fillText(text, x, y);
}
export function textSize(size){
    context.font = `${size}px Arial`
}