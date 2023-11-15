let hero_jump_image
let hero

function preload(){
    hero_jump_image = loadImage("./assets/hero.jpg")
}

function setup(){
    createCanvas(canvasWidth, canvasHeight)
    hero = new Hero(0, 0, 100, 100, hero_jump_image, 1)
    hero.draw()
}