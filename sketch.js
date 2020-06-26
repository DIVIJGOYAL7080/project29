const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,bo7,box8,box9,box10,box11,box12;
var ball1,ground1,ground2,sling1,engine,world;













function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
box1 = new box(550,250,30,30);
box2 = new box(590,250,30,30);

box3 = new box(630,250,30,30);
box4 = new box(570,220,30,30);
box5 = new box(610,220,30,30);
box6 = new box(590,190,30,30);
box7 = new box(950,130,30,30);
box8 = new box(990,130,30,30);
box9 = new box(1030,130,30,30);
box10 =new box(970,100,30,30);
box11= new box(1010,100,30,30);
box12 = new box(1000,50,30,30);
ball1 = new ball(250,200,30,30);
sling1 = new sling(ball1.body,{x:250,y:200})
ground1=new ground(600,300,200,10);
ground2=new ground(1000,150,200,10);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
 box1.display();
 box3.display();
 box2.display();
 box4.display();
 box5.display();
 box6.display();
 box7.display();
 box8.display();
 box9.display();
 box10.display();
 box11.display();
 box12.display();
 ball1.display();
 sling1.display();
 ground1.display();
 ground2.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})  
  }
  function mouseReleased(){
  sling1.fly();
  
  }