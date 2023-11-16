class Plane {
    constructor (image){
        this.x = CANVAS_WEIGTH / 2
        this.height = 150
        this.width = 50
        this.y = CANVAS_HEIGHT - this.height - 20
    }
    draw(){
        rect(this.x, this.y, this.width, this.height)
    }
    
}