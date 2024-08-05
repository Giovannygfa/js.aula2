let cor;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
   background(color("cyan"));
  cor = color(random(0,255), random(0,255), random(0,255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
  
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical,50);
 
  
  
  if (mouseX < posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal - 3;
  }
  
  if (mouseX > posicaoHorizontal){
    posicaoHorizontal =  posicaoHorizontal + 3;
  }
  
  if (mouseY < posicaoVertical){
    posicaoVertical-=3;
  }
    
  if (mouseY > posicaoVertical){
    posicaoVertical+=3;
  }
  
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
    
}
