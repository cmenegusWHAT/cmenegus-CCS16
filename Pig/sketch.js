var xpos = 0;
var ypos = -60;
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw(){
  background(255);
	pig ();
	myFunction("Oink!");
	text("Pigs really do fly! Push a button", 250, 250, 300, 300);
	textAlign(CENTER);
	textSize(32);
  
}
function pig (){
  push();
  translate(xpos,ypos);
  ellipseMode(CENTER);
  stroke(0);
	noStroke();
	fill(255,192,203);
  ellipse(0, -60, 75, 75); // centered, height, width
	fill(255);
	ellipse(-14,-65,7,7);//left eye
	ellipse(14,-65,7,7);//right eye
	ellipse(-5,-45,3,10); //left nostril
	ellipse(5,-45, 3, 10); //right nostril
	noFill();
	stroke(255);
	ellipse(0,-45,30,30); //nose
	fill(255,193,203); //ear color
	noStroke();
	quad(-20,-98,-16,-95,-25,-72,-34,-98);//left ear
	quad(20,-98,16,-95,25,-72,34,-98);//right ear
	pop();
}

function myFunction( greeting ) {
  text(greeting, xpos/400, ypos/400, 170, 180);
  noStroke()
  fill(255,192,203);
  ellipseMode(CENTER);
}

function keyPressed()
{
  xpos = random(0, width);
  ypos = random(0, height);
}


  