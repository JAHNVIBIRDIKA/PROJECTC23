var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottomrect;

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

bottomrect = createSprite(375,650,230,20);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(375, 650, 230, 20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(128,128,0);
  helicopterSprite.velocityX = 2;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  fill(126, 51, 255);
  rect(250,560,20,200);
  rect(500,560,20,200);
 // rect3(375,650,230,20);
  
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic (packageBody,false);
	if(packageBody.y-bottomrect.y==bottomrect.height/2+packageBody.height/2){
   Matter.Body.setStatic (packageBody,true);
	}
  }
}
