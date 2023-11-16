class Plane {
    constructor (image){
        this.x = CANVAS_WEIGTH / 2
        this.height = 150
        this.width = 50
        this.y = CANVAS_HEIGHT - this.height - 20
        this.speed = 15
        this.image = image
        this.hp = 5
        this.score = 0
    }
    draw(){
        image(this.image, this.x, this.y, this.width, this.height)
        this.drawInterface()
        this.score++
    }
    getDamage(){
        this.hp--
        if(this.hp <= 0){
            clearInterval(bullet_spawn_interval)
            clearInterval(enemy_spawn_interval)
            this.drawLosingInterface()
            noLoop()
        }
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
    drawInterface(){
        fill("white")
        textSize(30)
        text(`Score : ${this.score}`, 20, 50)
        textSize(25)
        text(`${this.hp} ❤️`, 20, 80)
    }
    drawLosingInterface(){
        fill("rgba(0,0,0,0.5)")
        rect(0,0,CANVAS_WEIGTH,CANVAS_HEIGHT)
        textSize(45)
        fill("white")
        text("YOU LOSE", CANVAS_WEIGTH / 2 - 120, CANVAS_HEIGHT / 2)
        textSize(15)
        fill("rgba(255,255,255,0.5)")
        text("press space to restart",  CANVAS_WEIGTH / 2 - 80, CANVAS_HEIGHT / 2 + 80)
    }
}