const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 =new Rubber(800,300,30);
    rubber2 =new Rubber(820,300,30);
    iron1 =new Iron(300,300,30,50);
    iron2 =new Iron(310,300,30,50);
    iron3 =new Iron(320,300,30,50);
    stone1 = new Stone(610,300,10,10);
    stone2 = new Stone(600,300,10,10);
    stone3 = new Stone(600,300,10,10);
    stone4 = new Stone(600,300,10,10);
    stone5 = new Stone(600,300,10,10);
    stone6 = new Stone(600,300,10,10);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    iron1.display();
    iron2.display();
    iron3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    stone4.display();
    stone5.display();
    stone6.display();
}