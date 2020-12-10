var bad, bad_sprite, tree, tree_im, stone, throw1;
var mango1;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	 bad = loadImage("boy.png");
	 tree_im = loadImage("tree.png");
}

function setup() {

	createCanvas(700, 700);

    engine = Engine.create();
	world = engine.world;

	var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(350,680,700,40,ground_options);
    
	World.add(world,ground);
	
	//tree=createSprite(500,440,450,500);
	//tree.addImage(tree_im);
	//tree.scale = 0.35

	bad_sprite=createSprite(150,610,10,10);
	bad_sprite.addImage(bad);
	bad_sprite.scale = 0.1;

    stone = new Stone(300,400,30,30);
    throw1 =new Stonethrow(stone.body,{x:100, y:550});
	  
	mango1 = new Mango(400,300,30);
	mango2 = new Mango(450,300,30);
	mango3 = new Mango(500,300,30);
	mango4 = new Mango(550,300,30);
	mango5 = new Mango(425,225,30);
	mango6 = new Mango(475,225,30);
	mango7 = new Mango(525,225,30);
	mango8 = new Mango(450,150,30);
	mango9 = new Mango(500,150,30);

}

function draw(){

    background(0);
	Engine.update(engine);
	image(tree_im,300,100,350,500);
	
    rectMode(CENTER);
	rect(ground.position.x,ground.position.y,800,40);

	stone.display();
	throw1.display();

	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();
	mango7.display();
	mango8.display();
	mango9.display();

    collision(stone,mango1);
	collision(stone,mango2);
	collision(stone,mango3);
	collision(stone,mango4);
	collision(stone,mango5);
	collision(stone,mango6);
	collision(stone,mango7);
	collision(stone,mango8);
	collision(stone,mango9);

	drawSprites();


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    throw1.fly();
}

function collision(rock,mango){
	mangopos = mango.body.position
	rockpos = rock.body.position
 var dis = dist(mangopos.x,mangopos.y,rockpos.x,rockpos.y)
 if(dis<=50){
	 Matter.Body.setStatic(mango.body,false)
 }
}