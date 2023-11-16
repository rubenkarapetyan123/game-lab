class Enemy {
    constructor( x, image1, image2 ){
        this.x = x
        this.y = 0
        this.width = 30
        this.height = 30
        this.speed = 2
        this.id = `${Math.random()}`
        this.image = image1
        this.image1 = image1
        this.image2 = image2
        this.frame = 0
    }
    static spawnEnemy (image1, image2){
        enemies.push(
            new Enemy(random(0, CANVAS_WEIGTH - 30), image1, image2)
        )
    }
    animation(){
        this.frame++
        if(this.frame >= 10){
            this.frame = 0
            if(this.image.src === this.image1.src){
                this.image = this.image2
            }else{
                this.image = this.image1
            }
        }
    }
    draw(){
        this.animation()
        this.moving()
        this.running()
        this.outScreen()
        image(this.image, this.x, this.y, this.width, this.height+50)
    }
    moving(){
        this.y += this.speed
    }
    disappearing(){
        enemies = enemies.filter(enemy=>{
            return this.id !== enemy.id
        })
    }
    outScreen(){
        if(this.y >= CANVAS_HEIGHT){
            enemies = enemies.slice(1, enemies.length)
            plane.getDamage()
            fill("rgba(255,0,0,0.5)")
            rect(0,0,CANVAS_WEIGTH,CANVAS_HEIGHT)
        }
    }
    isTouchedPlane(){
        if(
            this.y + this.height > plane.y &&
            ((this.x + this.width >= plane.x && this.x + this.width < plane.x + plane.width) ||
            (this.x >= plane.x && this.x < plane.x + plane.width))
        ){
            plane.getDamage()
            this.disappearing()
        }
    }
    running(){
        this.isTouchedPlane()
        bullets.forEach(bullet=>{
            this.isTouchedBullet(bullet)
        })
    }
    isTouchedBullet(bullet){
        if(
            bullet.y <= this.y + this.height &&
            ((bullet.x > this.x && bullet.x < this.x + this.width) ||
            (bullet.x + bullet.width > this.x && bullet.x + bullet.width < this.x + this.width))
        ){
            boom_sound.play()
            this.disappearing()
            bullet.disappearing()
        }
    }
}