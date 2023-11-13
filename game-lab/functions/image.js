export function loadImage(src){
    const image = new Image()
    image.src = src
    return image
}
export function image(img, x, y, width, height){
    const imgWidth = width ? width : img.width
    const imgHeight = height ? height : img.height
    img.onload = ()=>{
        context.drawImage(img, x, y, imgWidth, imgHeight)
    }
}