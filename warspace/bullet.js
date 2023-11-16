class Bullet {
    constructor (x, y, image){
        this.x = x
        this.y = y
        this.width = 5
        this.height = 10
        this.speed = 5
    }
    draw(){
        this.moving()
        rect(this.x, this.y, this.width, this.height)
    }
    moving(){
        this.y -= this.speed
    }
}