
let ball
const d = 50
function setup(){
    createCanvas(500,500)
    background("gray")
    fill("green")
    ball = {
        d : d,
        x : width / 2,
        y : 0,
        speed : 1,
        g : 0.1
    }
}


function draw(){
    background("gray")
    ball.y += ball.speed
    if(ball.y+ball.d/2 >= height){
        ball.speed = -1*ball.speed
        ball.g *= 2
    }
    ball.speed += ball.g

    if(ball.g >= ball.d/2){
        ball.g = 0
        ball.y = height - ball.d/2
        noLoop()
    }

    // console.log(ball.g,ball.speed);
    
    circle(
        ball.x, 
        ball.y,
        ball.d
    )    
}

function keyTyped(){
    if(key === " "){
        if(!isLooping()){
            loop()         
        }
        ball.y -= 70
        ball.speed = 0.05
        ball.g = 0.1   
    }
}