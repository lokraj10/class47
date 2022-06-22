//const { Matter } = require("./matter");

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine, canvas
var backgroundimage, playerImg, enemy1Img, enemyImg, gunImg
var groundBottom, groundTop, groundLeft, groundRight
var collision 
function preload(){
  backgroundimage = loadImage("Imported piskel.gif")
  playerImg = loadImage("player.png")
  enemyImg = loadImage("enemy.png")
  enemy1Img = loadImage("eneny1.png")
  gunImg = loadImage("gun.png")

}


function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
var options = {
  isStatic: true
  
}
var playerOptions = {
  frictionAir: .7,
  restitution: .8
}

  rectMode(CENTER)
  player = Bodies.rectangle(100,100,50,50,playerOptions)
  World.add(world,player)
  groundBottom = Bodies.rectangle(600,580,1200,30,options)
  World.add(world,groundBottom)

  groundTop = Bodies.rectangle(600,0,1200,10,options)
  World.add(world,groundTop)
}

function draw() {
  background(0,0,0);  
  Engine.update(engine)
  image(backgroundimage,0,0,1200,600)
  image(playerImg,player.position.x,player.position.y,50,50)
  rect(groundBottom.position.x,groundBottom.position.y,1200,30)
  rect(groundTop.position.x,groundTop.position.y,1200,10)
  if (Matter.Collision.collides(player, groundBottom) != null) {
    Matter.Body.setVelocity(player, {x:0, y: 0} )
}


    if(keyDown(LEFT_ARROW)){
      player.position.x -= 10
    
    }
    if(keyDown(UP_ARROW)){
      player.position.y -=10
    }
    if(keyDown(DOWN_ARROW)){
      player.position.y +=10
    }
    if(keyDown(RIGHT_ARROW)){
      player.position.x +=10
    }
}