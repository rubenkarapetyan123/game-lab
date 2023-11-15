class Hero {
    constructor (x, y, width, height, img, mass){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.mass = mass
        this.img = img
    }
    draw (){
        image(this.img, this.x, this.y, this.width, this.height)
    }
}