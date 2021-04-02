const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score=0;
var gameState = "onSling";

function preload() {
    getBg();

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(780, 220);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,220,70,70);
    box4 = new Box(920,220,70,70);
    pig3 = new Pig(829, 220);

    log3 =  new Log(810,280,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(660,320,145, PI/7);
    log5 = new Log(950,320,150, -PI/7);

    bird = new Bird(200,50);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});
}

function draw(){
    if(backgroundImg){
        background(backgroundImg);
    
    }else{
        background(0)
    }
    noStroke();
    textSize(35);
    fill("crimson");
    text("score: "+score,width-300,50);
    Engine.update(engine);
    //strokeWeight(4);
    
    
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();


    log4.display();
    log5.display();
    pig1.score();
    pig3.score();
    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
       // slingshot.attach(bird.body);
    }
}

async function getBg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responsejson = await response.json();
    var dt = responsejson.datetime;
    var hour = dt.slice(11,13);
    if(hour>=06&&hour<=19){
        bg="sprites/kitchen.jpg"
    }else{
        
    bg="sprites/kitchen2.jpg"
    }
    backgroundImg=loadImage(bg);
}