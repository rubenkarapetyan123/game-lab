class Plane {
    constructor (image, image_left, image_right){
        this.x = CANVAS_WEIGTH / 2
        this.height = 150
        this.width = 50
        this.y = CANVAS_HEIGHT - this.height - 20
        this.speed = 15
        this.image = image
        this.hp = 5
        this.score = 0
        this.image_left = image_left
        this.image_right = image_right
        this.image_straight = image
        this.straightTimeoutId
    }
    draw(){
        image(this.image, this.x, this.y, this.width, this.height)
        this.drawInterface()
        this.score++
    }
    getStraight(){
        clearTimeout(this.straightTimeoutId)
        this.straightTimeoutId = setTimeout(()=>{
            this.image = this.image_straight
        },300)
    }
    getDamage(){
        damage_sound.play()
        this.hp--
        if(this.hp <= 0){
            clearInterval(bullet_spawn_interval)
            clearInterval(enemy_spawn_interval)
            this.drawLosingInterface()
            lose_sound.play()
            noLoop()
        }
    }
    goRight (){
        this.image = this.image_right
        this.getStraight()
        if(this.x + this.width >= CANVAS_WEIGTH){
            return
        }
        this.x += this.speed
    }
    goLeft (){
        this.image = this.image_left
        this.getStraight()
        if(this.x < 0){
            return
        }
        this.x -= this.speed
    }
    spawnBullet(){
        bullets.push(
            new Bullet(this.x + this.width / 2, this.y)
        )
        shoot_sound.play()
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