function generatePlatforms(arr){
    for(let i = 0; i < 5; i++){
        
        arr.push(
            new Platform(random(0, canvasWidth - 100) + 100, i * 200, 100)
        )
    }
}