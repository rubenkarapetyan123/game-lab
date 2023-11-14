export function sin(value){
    const degrees = getAngle(value)
    return Math.sin(degrees)
}
export function cos(value){
    const degrees = getAngle(value)
    return Math.cos(degrees)
}
export function map(value, start1, end1, start2, end2){
    let range1 = end1 - start1
    let range2 = end2 - start2
    let percent = (value - start1)/range1 * 100
    let x = percent/100 * range2 + start2
    return x
}
export function angleMode(mode){
    if(mode === RADIANS || mode === DEGREES){
        ANGLE_MODE = mode
    }else {
        throw new Error("function angleMode has not mode : "+mode)
    }
}
export function dist(x1, y1, x2, y2){
    return Math.sqrt((x2-x1)**2 + (y2-y1)**2)
}
export function getAngle(value){
    if(ANGLE_MODE === DEGREES){
        return value
    }
    return value * (180 / Math.PI) 
}
export function getRadians(value){
    if(ANGLE_MODE === RADIANS){
        return value
    }
    return value * (Math.PI / 180) 
}
export function push(){
    context.save()
}
export function pop(){
    context.restore()
}