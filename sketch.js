const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;
let right;
let left;
let up;
let r2;
let l2;

function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	
	var ball_options = {
		restitution : 0.3,
		friction : 0,
		density : 1.2
	  }
	//Create the Bodies Here.
	ground = new Ground(400, 585, 800, 30);
	right = new Ground(550, 520, 10, 100);
	left = new Ground(700, 520, 10, 100);
	r2 = new Ground(5, 300, 30, 600);
	l2 = new Ground(800, 300, 40, 600);
	up = new Ground(400, 10, 800, 50);
	fill("white")
	ball = Bodies.circle(200, 100, 20,ball_options)
    World.add(world, ground);
	World.add(world, ball)
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  
	background("green");
    ellipse(ball.position.x, ball.position.y, 20, 20)

	Engine.update(engine)
    push()
	stroke("yellow")
	strokeWeight(3)
	ground.show();
	right.show();
	left.show();
	up.show();
	l2.show();
	r2.show();
	textSize(50)
	fill("red")
	text("CLEAN CITY, GREEN CITY!", 100, 200);
	textSize(20)
	fill("white")
	strokeWeight(0)
	text("Instructions: use UP arrow to throw trash in trashbin.", 60, 60)
    pop()
}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball,{x : 650, y : 300}, { x: 85, y: -85 })
	}
}


