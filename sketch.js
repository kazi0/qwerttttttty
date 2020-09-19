const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4
var pig1
var log1
var land

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

     RED = new Bird(100,100);

    // layer3
    log4 = new Log(890,110,160,PI/-4);
    log3 = new Log(750,110,170,PI/4);
    box5 = new Box(810,180,70,70);
    // layer2
    box3 = new Box(700,250,70,70)
    box4 = new Box(920,250,70,70)
    log2 = new Log(810,270,300,PI/2);
    pig2 = new Pig(810,250)
    
   // layer 1
    pig1 = new Pig(810,300)
    box1 = new Box(700,300,70,70);
    box2 = new Box(920,300,70,70);
    land = new Ground(600,390,1200,10)
    log1 = new Log(810,180,300,PI/2)
}
function draw(){
    background(0);
    //rect(200,200,100,200)
    Engine.update(engine);
    RED.display();
    log4.display();
    log3.display();
    box5.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log1.display();
    pig1.display();
    box1.display();
    box2.display();
    land.display();
}