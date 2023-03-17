var squariad,edges;
var pin1, pin2, pin3, pin4, pin5, pin6;

function preload(){

}

function setup(){
createCanvas(400,400)
  squariad=createSprite(180, 50, 20, 20);  
  squariad.shapeColor = color(255);

  pin1 = createSprite(200,300,20,20);
  pin1.shapeColor = "gray";
  pin2 = createSprite(180,320,20,20);
  pin2.shapeColor = "gray";
  pin3 = createSprite(220,320,20,20);
  pin3.shapeColor = "gray";
  pin4 = createSprite(160,340,20,20);
  pin4.shapeColor = "gray";
  pin5 = createSprite(200,340,20,20);
  pin5.shapeColor = "gray";
  pin6 = createSprite(240,340,20,20);
  pin6.shapeColor = "gray";


  squariad.velocity.y = 4;
  squariad.velocity.x =0.5;

}
   
function draw() {
  background(220)
  //Crear bordes
  edges=createEdgeSprites();
  squariad.bounceOff(edges);
  squariad.bounce(pin1);
  squariad.bounce(pin2);
  squariad.bounce(pin3);
  squariad.bounce(pin4);
  squariad.bounce(pin5);
  squariad.bounce(pin6);

  pin1.bounceOff(edges);
  pin1.bounce(squariad);
  pin1.bounce(pin2);
  pin1.bounce(pin3);
  pin1.bounce(pin4);
  pin1.bounce(pin5);
  pin1.bounce(pin6);

  pin2.bounceOff(edges);
  pin2.bounce(squariad);
  pin2.bounce(pin1);
  pin2.bounce(pin3);
  pin2.bounce(pin4);
  pin2.bounce(pin5);
  pin2.bounce(pin6);

  pin3.bounceOff(edges);
  pin3.bounce(squariad);
  pin3.bounce(pin1);
  pin3.bounce(pin2);
  pin3.bounce(pin4);
  pin3.bounce(pin5);
  pin3.bounce(pin6);

  pin4.bounceOff(edges);
  pin4.bounce(squariad);
  pin4.bounce(pin1);
  pin4.bounce(pin2);
  pin4.bounce(pin3);
  pin4.bounce(pin5);
  pin4.bounce(pin6);

  pin5.bounceOff(edges);
  pin5.bounce(squariad);
  pin5.bounce(pin1);
  pin5.bounce(pin2);
  pin5.bounce(pin3);
  pin5.bounce(pin4);
  pin5.bounce(pin6);

  pin6.bounceOff(edges);
  pin6.bounce(squariad);
  pin6.bounce(pin1);
  pin6.bounce(pin2);
  pin6.bounce(pin3);
  pin6.bounce(pin4);
  pin6.bounce(pin5);

  
  
  drawSprites();
}