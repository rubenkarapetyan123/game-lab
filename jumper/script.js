let hero_jump_image
let hero

function preload(){
    hero_jump_image = loadImage("./assets/hero.jpg")
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    hero = new Hero(0, height - 100, 100, 100, hero_jump_image, 1)
}

function draw(){
    background("green")
    hero.engine()
    hero.draw()
}

function keyTyped(){    
    if(key === "d"){        
        hero.goRight()
    }else if(key === "a"){
        hero.goLeft()
    }
}