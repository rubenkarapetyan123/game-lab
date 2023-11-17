
function drawMenu(title, ...bgcolor){
    fill(`rgba(${bgcolor.join(",")},0.5)`)
    rect(0,0,CANVAS_WEIGTH,CANVAS_HEIGHT)
    textSize(45)
    fill("white")
    text(title, CANVAS_WEIGTH / 2 - 120, CANVAS_HEIGHT / 2)
    textSize(15)
    fill("rgba(255,255,255,0.5)")
    text("press space to restart",  CANVAS_WEIGTH / 2 - 80, CANVAS_HEIGHT / 2 + 80)
}
