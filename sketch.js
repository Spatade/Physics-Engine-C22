//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ball, ground;
var engine, world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options =
  {
    isStatic : true
  }

  ground = Bodies.rectangle(200,390,20,20,ground_options);
  World.add(world,ground);


var body_options = {
  restitution : 1.0
}

  ball = Bodies.circle(200,200,50,body_options);
  World.add(world,ball);


 
  
}

function draw() {
  background("black");  
Engine.update(engine);

rectMode(CENTER);
rect(ground.position.x,ground.position.y,50,50);

ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,50,50);





 
}