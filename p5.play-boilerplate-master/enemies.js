class Enemies{
    constructor(x,y,width,height, EnemyPos){
        this.body = Bodies.rectangle(x,y,width, height)
        this.EnemyPos = EnemyPos
        this.image = loadImage("enemy.png")
        World.add(world, this.body)
    }































































}