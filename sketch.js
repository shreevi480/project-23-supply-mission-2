var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var line1, line2, line3, line1body, line2body, line3body;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1 = createSprite(width/2, height-50, 200, 20);
	line1.shapeColor = "red";
	line2 = createSprite(300, height-90, 20, 100);
	line2.shapeColor = "red";
	line3 = createSprite(500, height-90, 20, 100);
	line3.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.05, isStatic:true});
	World.add(world, packageBody);
	
	stick1body = Bodies.rectangle(width/2, height-50, 200, 20 , {isStatic:true} );
 	World.add(world, stick1body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   
	Body.setStatic(packageBody, false);
  }
}



