let hero_right_jump_image
let hero_left_jump_image
let hero
let platforms = [ new Platform(50, 650, 100) ]

function preload(){
    hero_right_jump_image = loadImage("./assets/hero/hero_right.png")
    hero_left_jump_image = loadImage("./assets/hero/hero_left.png")
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    const hero_config = {
        x : 0, 
        y : height - 100, 
        width : 100, 
        height : 100, 
        mass : 1, 
        left_jump_image : hero_left_jump_image, 
        right_jump_image : hero_right_jump_image
    }
    hero = new Hero(hero_config)
}

function draw(){
    background("green")
    hero.engine()
    hero.draw()
    platforms[0].draw()
}

function keyTyped(){    
    if(key === "d"){        
        hero.goRight()
    }else if(key === "a"){
        hero.goLeft()
    }
}