const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,g	
var world;


function setup() {
	createCanvas(1600, 1600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1200,650);
	
    var g_options = {isStatic: true}
    g = Bodies.rectangle(200,650,1500,10,g_options);
    World.add(world,g);
    
	paperObject=new paper(200,450,40);

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paperObject.display();
  
  dustbinObj.display();
 
  rectMode(CENTER)

  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:280,y:-280});
    
  	}
}





