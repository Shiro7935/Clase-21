const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;

var ball;

var boton1,boton2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options = {
    restitution: 1
  }
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);

  ball = Bodies.circle(150,150,25,ball_options)
  World.add(world, ball);
 
  boton1 = createImg("right.png")
  boton1.position(220,30)
  boton1.size(50,50)
  boton1.mouseClicked(h_force)

  boton2 = createImg("up.png")
  boton2.position(20,30)
  boton2.size(50,50)
  boton2.mouseClicked(w_force)

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  ellipse(ball.position.x,ball.position.y,25)
  Engine.update(engine);

}

function h_force()
{
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})
}

function w_force()
{
Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
