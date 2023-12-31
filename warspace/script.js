let plane 
let bullets = []
let enemies = []
let plane_image
let plane_image_left
let plane_image_right
let meteor_images = [[],[],[]]
let bullet_spawn_interval
let enemy_spawn_interval
let explosion_image 
let game_state = START
let stars = []

let damage_sound, lose_sound, shoot_sound, boom_sound, soundtrack



function resetData (){
    stars = addStars(50)
    bullets = []
    enemies = []
    plane = new Plane(plane_image, plane_image_left, plane_image_right)
}

function preload(){
    plane_image = loadImage("./assets/plane.png")
    explosion_image = loadImage("./assets/blowup.png")
    plane_image_left = loadImage("./assets/plane1.png")
    plane_image_right = loadImage("./assets/plane2.png")
    meteor_images[0][0] = loadImage("./assets/meteor1.png")
    meteor_images[0][1] = loadImage("./assets/meteor12.png")
    meteor_images[1][0] = loadImage("./assets/meteor2.png")
    meteor_images[1][1] = loadImage("./assets/meteor22.png")
    meteor_images[2][0] = loadImage("./assets/meteor3.png")
    meteor_images[2][1] = loadImage("./assets/meteor32.png")
    damage_sound = loadSound("./assets/uron.mp3")
    lose_sound = loadSound("./assets/lose.mp3")
    shoot_sound = loadSound("./assets/shoot.mp3")
    boom_sound = loadSound("./assets/babax.mp3")
    soundtrack = loadSound("./assets/soundtrack.mp3")
}

function setup(){
    createCanvas(CANVAS_WEIGTH, CANVAS_HEIGHT)
    resetData()
    textAlign(TEXT_START)
}

function draw(){ 
    if(game_state === START){
        drawMenu("START", 0, 255, 0)
        return
    }
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
    if(key === " " && game_state === START){
        game_state = PROCCESSING 
        soundtrack.volume = 0.2
        soundtrack.loop = true
        soundtrack.defaultMuted = false
        soundtrack.play()
        resetData()
        runIntervals()
        loop()
        return
    }

    if(key === "a"){
        plane.goLeft()
    }else if(key === "d"){
        plane.goRight()
    }

    if(plane.hp <= 0 && key === " "){
        game_state = PROCCESSING 
        soundtrack.volume = 0.2
        soundtrack.loop = true
        soundtrack.defaultMuted = false
        soundtrack.play()
        resetData()
        runIntervals()
        loop()
    }
}

function runIntervals(){
    if(game_state === START){
        return
    }
    bullet_spawn_interval = setInterval(()=>{
        plane.spawnBullet()
    },BULLET_SPAWN_DELAY)
    
    // enemy_spawn_interval = setInterval(()=>{        
        // Enemy.spawnEnemy(meteor_images[random(0, meteor_images.length)])
        // const arr = meteor_images[random(0,meteor_images.length)]
        // Enemy.spawnEnemy(arr[0], arr[1])
    // },ENEMY_SPAWN_DELAY)

    let speed = ENEMY_SPAWN_DELAY
    function enemy_spawner(){
        enemy_spawn_interval = setTimeout(()=>{
            if(speed >= ENEMY_SPAWN_DELAY_MIN){
                speed -= ENEMY_SPAWN_SPEED
            }
            const arr = meteor_images[random(0,meteor_images.length)]
            Enemy.spawnEnemy(arr[0], arr[1])
            enemy_spawner()
        }, speed)
    }
    enemy_spawner()
}


function drawBackground(){
    background("rgba(0,0,0,0.3)") 
    stars.forEach(star=>star.draw())
}

function addStars(count){
    let arr = []
    function Star(x, y){
        this.x = x
        this.y = y
        this.r = random(1, 5)
        this.speed = random(5, 10)
        this.draw = ()=>{
            this.moving()
            this.outScreen()
            fill("white")
            circle(this.x,this.y,this.r)
        }
        this.moving = () => {
            this.y += this.speed
        }
        this.outScreen = ()=>{
            if(this.y >= CANVAS_HEIGHT){
                this.y = 0
            }
        }
    }
    for(let i = 0; i < count; i++){
        arr.push(
            new Star(random(0, CANVAS_WEIGTH), random(0, CANVAS_HEIGHT))
        )
    }
    return arr
}