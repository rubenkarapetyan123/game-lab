class Plane {
    constructor (image){
        this.x = CANVAS_WEIGTH / 2
        this.height = 150
        this.width = 50
        this.y = CANVAS_HEIGHT - this.height - 20
        this.speed = 15
        this.image = image
    }
    draw(){
        image(this.image, this.x, this.y, this.width, this.height)
    }
    goRight (){
        if(this.x + this.width >= CANVAS_WEIGTH){
            return
        }
        this.x += this.speed
    }
    goLeft (){
        if(this.x < 0){
            return
        }
        this.x -= this.speed
    }
    spawnBullet(){
        bullets.push(
            new Bullet(this.x + this.width / 2, this.y)
        )
    }
}