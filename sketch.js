const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;
var fruit,rope;
var linky;
var backgroundImg,FruitImg,Rabbit2;
var rabbit,button;
function preload(){
  backgroundImg=loadImage("background.png");
  FruitImg=loadImage("melon.png");
  Rabbit2=loadImage("Rabbit-01.png");

}

function setup() 
 {
  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rope = new Rope(7,{x:245,y:30});
  fruit = Bodies.circle(300,300,20);
  Matter.Composite.add(rope.body,fruit);

  linky = new Link(rope,fruit);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
button=createImg("buttonuwu.png") 
button.position(220,30) 
button.size(25,25)
button.mouseClicked(drop)
  imageMode(CENTER)
  rabbit=createSprite(250,650,100,100);
  rabbit.addImage(Rabbit2);
  rabbit.scale=0.2;
 }
function draw() 
{
  background(51);
  image(backgroundImg,width/2,height/2,500,700)
  rope.show();
  image(FruitImg,fruit.position.x,fruit.position.y,60,60)
  Engine.update(engine);
  ground.show();

 drawSprites();
   
}
function drop(){
linky.detach();
rope.break();
linky=null;



}