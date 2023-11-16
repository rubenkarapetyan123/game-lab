let plane 
let bullets = []
let enemies = []
let plane_image
let meteor_images = []
let bullet_spawn_interval
let enemy_spawn_interval

function resetData (){
    bullets = []
    enemies = []
    plane = new Plane(plane_image)
}

function preload(){
    plane_image = loadImage("./assets/plane.png")
    meteor_images[0] = loadImage("./assets/meteor1.png")
}

function setup(){
    createCanvas(CANVAS_WEIGTH, CANVAS_HEIGHT)
    resetData()
}

function draw(){ 
    drawBackground()
    bullets.forEach(bullet=>{
        bullet.draw()
    })
    enemies.forEach(enemy=>{
        enemy.draw()
    })
    plane.draw()
}

function keyTyped(){
    if(key === "a"){
        plane.goLeft()
    }else if(key === "d"){
        plane.goRight()
    }

    if(plane.hp <= 0 && key === " "){
        resetData()
        runIntervals()
        loop()
    }
}

function runIntervals(){
    bullet_spawn_interval = setInterval(()=>{
        plane.spawnBullet()
    },BULLET_SPAWN_DELAY)
    
    enemy_spawn_interval = setInterval(()=>{        
        Enemy.spawnEnemy(meteor_images[random(0, meteor_images.length)])
    },ENEMY_SPAWN_DELAY)
}
runIntervals()


function drawBackground(){
    background("black") 
    for(let i = 0; i < 50; i++){
        fill("white")
        circle(random(0, CANVAS_WEIGTH),random(0,CANVAS_HEIGHT),random(0.1, 5))
    }
}