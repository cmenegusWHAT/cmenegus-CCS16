var bgimg; // for background
var xspeed = 10.0;
var x = 0.0;
var angle = 0.0; // for twinkling stars

function preload(){
bgimg = loadImage('Assets/galaxy_background.jpg'); //background image
}

function setup(){
  createCanvas(1301, 822);
  background(bgimg, 100);
  
}
function draw() {
  fill(255);
  noStroke();
  textSize(19);
  text("Create mini-galaxies by holding your mouse in a location. Move to create another.", 20, 40);
  star()
  
  
  //twinkling stars
  translate(0,1301/1.5);
    var amplitude = 1301/1;//outputting them as a sin wave
    var y;    
    if (x === 0){
      angle = 0;
    }
    else {
      angle +=10.0;
    }
y = sin(radians(angle)) * amplitude;
    fill(196, 219, 249);
    ellipse(x,y,2,2);
    x+=10.0;
    x %= width;
 
  
  
}
  function star(){
  //angle = map(mouseX, 0,width, 0,360);
  //rotate(radians(angle*100));  
  noStroke();
  translate(mouseX,mouseY);
  fill(0);
  rotate(radians(205*frameCount%900)); //rotates output of ellipses
  rotate(radians(100*frameCount%360));
  for(var i =0; i < 400; i++){
    push();
    noStroke();
    fill(random(230),5,random(210),random(220));
   // fill(random(125),random(250),random(100));
    ellipse(10*frameCount % (width/20),0,4,4);
    
    
    rotate(radians(mouseX, mouseY));
    //image(stars, 10*frameCount % (width/2),0,10,10)
    //image((10*frameCount % (width/2),0,10,10)
    //
    frameRate(30);
    pop();
  }

}
  