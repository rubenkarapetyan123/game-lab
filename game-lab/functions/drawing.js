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
    context.strokeRect(x, y, width, height)
}
export function fill(color){
    context.fillStyle = color
}
export function noFill(){
    context.fillStyle = "transparent"
}
export function stroke(color){
    context.strokeStyle = color
}
export function strokeWeight(weight){
    context.lineWidth = weight
}
export function noStroke(){
    context.lineWidth = 0
    context.strokeStyle = "transparent"
}
export function text(text, x, y){
    context.fillText(text, x, y)
}
export function textSize(size){
    context.font = `${size}px Arial`
}
export function circle(x, y, d){
    context.beginPath()
    context.arc(x, y, d/2, 0, 2 * Math.PI)
    context.fill()
    context.stroke()
    context.closePath()
}
export function triangle (x1, y1, x2, y2, x3, y3){
    context.beginPath()
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.lineTo(x3, y3)
    context.lineTo(x1, y1)
    context.stroke()
    context.fill()
    context.closePath()
}
export function ellipse(x, y, width, height){
    context.beginPath();
    context.ellipse(x, y, width, height, Math.PI / 4, 0, 2 * Math.PI);
    context.fill()
    context.stroke()
    context.closePath()
} 