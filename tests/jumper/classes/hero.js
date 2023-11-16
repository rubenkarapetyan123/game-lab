class Hero {
    constructor ({x, y, width, height, mass, left_jump_image, right_jump_image}){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.mass = mass
        this.img = left_jump_image
        this.speed = 5
        this.jumpHeight = 350
        this.g = 3.5
        this.scaleX = 1
        this.state;
        this.left_jump_image = left_jump_image
        this.right_jump_image = right_jump_image
        this.translateY = 0
    }
    engine(){
        this.falling()
    }
    draw (){
        image(this.img, this.x, this.y - this.translateY, this.width, this.height)
    }
    goRight(){
        // if(this.scaleX === -1){
        //     this.scaleX = 1
        //     scale(-1,1)
        //     this.x = Math.abs(this.x)
        //     this.x -= this.width
        // }
        this.img = this.right_jump_image
        if(this.x + this.width <= width){
            this.x += this.speed
        }        
    }
    goLeft(){    
        // if(this.scaleX === 1){
        //     this.scaleX = -1
        //     scale(-1,1)
        //     this.x = -1*Math.abs(this.x)
        //     this.x -= this.width
        // }        
        this.img = this.left_jump_image
        if(this.x > 0){
            this.x -= this.speed
        }    
    }
    falling(){
        this.state = FALLING
        this.y += this.g
        // translate(0, this.g)
        platforms.forEach(platform=>{
            // console.log("platform ",platform.y);
            // console.log("hero ",this.y);
            console.log(this.y + this.height);
            
            if(this.y + this.height  >= platform.y 
                && this.y + this.height < platform.y + platform.height
                && this.x + this.width >= platform.x
                && this.x < platform.x + platform.width
                && this.state === FALLING
                ){
                    // console.log(this.translateY);  

                this.jump()
                translate(0, this.jumpHeight)
                this.translateY += this.jumpHeight
                return
            }
        })
        
        if(this.y + this.height >= height && this.translateY <= 0){
            // translate(0, 5)
            this.jump()
        }
    }
    jump(){
        this.state = JUMPING
        this.y -= this.jumpHeight
    }
}