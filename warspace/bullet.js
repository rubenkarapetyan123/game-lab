class Bullet {
    constructor (x, y, image){
        this.x = x
        this.y = y
        this.width = 2
        this.height = 7
        this.speed = 5
        this.id = `${Math.random()}`
    }
    draw(){
        this.moving()
        this.isTouchedEnemy()
        this.outScreen()
        rect(this.x, this.y, this.width, this.height)
    }
    moving(){
        this.y -= this.speed
    }
    outScreen(){
        if(this.y < 0){
            bullets = bullets.slice(1, bullets.length)
        }
    }
    disappearing(){ 
        bullets = bullets.filter(bullet=>{
            return bullet.id !== this.id
        })
    }
    isTouchedEnemy(){
        enemies.forEach(enemy=>{
            if(this.x + this.width < enemy.x + enemy.width && 
                this.x > enemy.x && 
                this.y > enemy.y &&
                this.y + this.height > enemy.y
            ){
                this.disappearing()
                enemy.disappearing()
            }
        })
    }
}