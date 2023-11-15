class Hero {
    constructor (x, y, width, height, img, mass){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.mass = mass
        this.img = img
        this.speed = 5
        this.jumpHeight = 200
        this.g = 3.5
        this.scaleX = 1
    }
    engine(){
        this.y += this.g
        if(this.y + this.height >= height){
            this.y -= this.jumpHeight
        }
    }
    draw (){
        image(this.img, this.x, this.y, this.width, this.height)
    }
    goRight(){
        if(this.scaleX === -1){
            this.scaleX = 1
            scale(-1,1)
            this.x = Math.abs(this.x)
            this.x -= this.width
        }
        if(this.x + this.width <= width){
            this.x += this.speed
        }        
    }
    goLeft(){    
        if(this.scaleX === 1){
            this.scaleX = -1
            scale(-1,1)
            this.x = -1*Math.abs(this.x)
            this.x -= this.width
        }        
        if(this.x + this.width < 0){
            this.x += this.speed
        }    
    }
}