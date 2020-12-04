//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//creating variables for paper, ground, side1, side2, side3
var paper, ground, side1, side2, side3;

function preload()
{
	
}

function setup() {
	//creating canvas
	createCanvas(800, 700);

	//creating engine and adding it to world
	engine = Engine.create();
	world = engine.world;

	//creating a paper
	paper = new Paper(100, 600, 20);

	//creating a ground
	ground = new Ground(400, 680, 800, 20);

	//creating the 3 sidess of the dustbin
	side1 = new Dustbin(550, 620, 20, 100);
	side2 = new Dustbin(635, 660, 150, 20);
	side3 = new Dustbin(720, 620, 20, 100);
	
	//running the engine
	Engine.run(engine);
  
}

function draw() {
	//rect mode = CENTER
	rectMode(CENTER);
	//background = black (0)
  	background(0);
  
	//updating the engine
	Engine.update(engine);
  
	//displaying the paper, ground, side1, side2, side3
	paper.display();
	ground.display();
	side1.display();
	side2.display();
	side3.display();

	//drawing the sprites
	drawSprites();
 
}
  
//function for landing the paper inside the dustbin when up arrow is pressed
function keyPressed(){
  	if(keyCode === UP_ARROW)  {
  		Matter.Body.applyForce(paper.body, paper.body.position, 
		{x:60, y: -60})
	
  	}
}