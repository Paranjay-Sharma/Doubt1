
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    background("blue");
	
	plane1 = new plane();
	hammer = new Hammer();
	rubber1 = new rubber();
    stone1 = new stone();

     ball1= new Smallball(500,650);
	 ball2= new Smallball(510,650);
	 ball3= new Smallball(520,650);
	 ball4= new Smallball(530,650);
	 ball5= new Smallball(540,650);
	 ball6= new Smallball(550,650);
	 ball7= new Smallball(560,650);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  Engine.update(engine);

  drawSprites();
ball1.display(); 
ball2.display();
ball3.display();
ball4.display();
ball5.display();
ball6.display();
ball7.display();
plane1.display();
stone1.display();
rubber1.display();
}



