
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var part1, part2, part3;
var ball1;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 800);


	engine = Engine.create();
	world = engine.world;

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color("yellow")

	//Create the Bodies Here.


	 
	 part1 = new bin(510,600,20,100);
	 part2 = new bin(690,600,20,100);
	 part3 = new bin(600,650,200,20);

	 ground = new Ground(800,700,1600,50);



	ball1 = new ball(20,20,50);

	Engine.run(engine);
  
}


function draw() {
//Engine.update(engine);
  
  background(0);
  
  part1.display();
  part2.display();
  part3.display();
  ball1.display();

  ground.display();

  drawSprites();
 
}



