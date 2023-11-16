class Enemy {
    constructor( x, image ){
        this.x = x
        this.y = 0
        this.width = 30
        this.height = 30
        this.speed = 5
    }
    static spawnEnemy (){
        enemies.push(
            new Enemy(random(0, CANVAS_WEIGTH))
        )
    }
    draw(){
        this.moving()
        rect(this.x, this.y, this.width, this.height)
    }
    moving(){
        this.y += this.speed
    }
}