class Enemy {
    constructor( x, image ){
        this.x = x
        this.y = 0
        this.width = 30
        this.height = 30
        this.speed = 5
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
        }
    }
}