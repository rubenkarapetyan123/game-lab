class Enemy {
    constructor( x, image ){
        this.x = x
        this.y = 0
        this.width = 30
        this.height = 30
        this.speed = 2
        this.id = `${Math.random()}`
        this.image = image
    }
    static spawnEnemy (image){
        enemies.push(
            new Enemy(random(0, CANVAS_WEIGTH), image)
        )
    }
    draw(){
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
            plane.hp--
        }
    }
    isTouchedPlane(){
        if(
            this.y + this.height > plane.y &&
            ((this.x + this.width >= plane.x && this.x + this.width < plane.x + plane.width) ||
            (this.x >= plane.x && this.x < plane.x + plane.width))
        ){
            plane.hp--
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
            this.disappearing()
            bullet.disappearing()
        }
    }
}