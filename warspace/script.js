let plane 
let bullets = []
let enemies = []
let plane_image
let meteor_images = []

function preload(){
    plane_image = loadImage("./assets/plane.png")
    meteor_images[0] = loadImage("./assets/meteor1.png")
}

function setup(){
    createCanvas(CANVAS_WEIGTH, CANVAS_HEIGHT)
    plane = new Plane(plane_image)
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
    // console.log(meteor_images[random(0, meteor_images.length)]);
    
    Enemy.spawnEnemy(meteor_images[random(0, meteor_images.length)])
},ENEMY_SPAWN_DELAY)