const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine,world,ground,ball,l1,l2,l3;


function setup()
{
   createCanvas(1500,1500);

engine = Engine.create();
world = engine.world;

var ground_options = {isStatic: true}
ground = Bodies.rectangle(200,250,1500,10,ground_options);
World.add(world,ground);

var inground_options = {isStatic: true}
inground = Bodies.rectangle(100,50,1500,5,inground_options);
World.add(world,inground);
inground.visible = false;

var ball_options = {restitution : 1.0}
ball = Bodies.circle(100,200,10,ball_options);
ball.loadImage = "paper.png";
World.add(world,ball);
//ball.shapeColor = "blue";

var  l1_options = {isStatic: true}
l1 = Bodies.rectangle(700,240,100,10,l1_options);
World.add(world,l1);
//l1.shapeColor ="red";

var  l2_options = {isStatic: true}
l2 = Bodies.rectangle(750,200,10,100,l2_options);
World.add(world,l2);
//l2.shapeColor ="red";

var  l3_options = {isStatic: true}
l3 = Bodies.rectangle(650,200,10,100,l3_options);
World.add(world,l3);
//l3.shapeColor ="red";

var  l4_options = {isStatic: true}
l4 = Bodies.rectangle(800,200,5,300,l4_options);
World.add(world,l4);
l4.visible = false;

}

function draw()
{

   background(255,255,255);

  Engine.update(engine);

UP();

rectMode(CENTER)
rect(ground.position.x,ground.position.y,1500,10);

rectMode(CENTER)
//rect(inground.position.x,inground.position.y,1500,5);
rect.visible = false;
inground.visible = false;

ellipseMode(RADIUS)
fill("blue")
ellipse(ball.position.x,ball.position.y,10)

rectMode(CENTER)
fill("red");
rect(l1.position.x,l1.position.y,100,10);
rect.shapeColor ="red";

rectMode(CENTER)
fill("red");
rect(l2.position.x,l2.position.y,10,100);
rect.shapeColor ="red";

rectMode(CENTER)
fill("red");
rect(l3.position.x,l3.position.y,10,100);
//rect.shapeColor ="red";

rectMode(CENTER)
//rect(l4.position.x,l4.position.y,5,300);
rect.visible = false;
l4.visible = false;
}

function UP()
{
   if (keyCode === UP_ARROW)
   {
      Matter.Body.applyForce( ball, {x: ball.position.x, y: ball.position.y}, {x:0.001, y:-0.001});
     
   }



}






