
// function keyPressed(){
//     console.log("key pressed");
// }
// function mouseClicked(){
//     console.log("mouse pressed");
// }
// function doubleClicked(){
//     console.log("db clicked");
// }


// function draw(){
//     console.log("hello");
// }

let img

function setup(){
    createCanvas(500,500)
    background("red")
    fill("blue")
    rect(10,10,20,20)
    textSize(25)
    text("Ruben", 100, 50)
    circle(50, 50, 100)
    console.log(height, width, windowWidth, windowHeight);
    triangle(200,200,250,400,200,300)
    img = loadImage("../../assets/example.jpg")
    image(img, 20, 20)    
    ellipse(300,300,75,50)
    console.log(sin(30));
    console.log(cos(30));
    console.log(map(34,0,100,5,10))    
    console.log(ANGLE_MODE)
    angleMode(DEGREES)
    console.log(ANGLE_MODE)
    // angleMode("sadiasd")
    console.log(dist(0,0,5,5))
}


// setTimeout(()=>noLoop(),5000)
// setTimeout(()=>console.log(isLooping()),2000)
// setTimeout(()=>console.log(isLooping()),8000)