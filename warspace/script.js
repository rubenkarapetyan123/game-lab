let plane = new Plane()
let bullets = []
let enemies = []

function setup(){
    createCanvas(CANVAS_WEIGTH, CANVAS_HEIGHT)
}

function draw(){
    background("blue") 
    plane.draw()
    bullets.forEach(bullet=>{
        bullet.draw()
    })
    enemies.forEach(enemy=>{
        enemy.draw()
    })
}

function keyTyped(){
    if(key === "a"){
        plane.goLeft()
    }else if(key === "d"){
        plane.goRight()
    }
}

setInterval(()=>{
    plane.spawnBullet()
},BULLET_SPAWN_DELAY)

setInterval(()=>{
    Enemy.spawnEnemy()
},ENEMY_SPAWN_DELAY)