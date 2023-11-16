let plane = new Plane()
let bullets = []

function setup(){
    createCanvas(CANVAS_WEIGTH, CANVAS_HEIGHT)
}

function draw(){
    background("blue") 
    plane.draw()
    bullets.forEach(bullet=>{
        bullet.draw()
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