//Create a sketch that animates multiple shapes along Lissajous curves. Try animating color and size properties of the shapes using sin() and cos() as well.
var waveLengthOne = 45.0;
var waveLengthTwo = 250.0;
var pointCount = 0;
var angle = 2.0;
var amplitude = 130;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(233);
  fill(0);
  text("Bounce!", width/2 -20, 40); //text
  if (pointCount > 2000) {
   noLoop();
  }
  
  
  noFill(); 
  strokeWeight(4);
  stroke(100,120,0 );
  translate(width / 2, height / 2);
  beginShape();
  for (var i = 0; i < pointCount; i++) {
    angle = i / waveLengthOne * TWO_PI;
    var y = sin(angle) * amplitude;

    angle = i / waveLengthTwo * TWO_PI;
    var x = sin(angle) * amplitude;
    vertex(x, y);
    
if (y > cos(angle) *amplitude) {
  stroke(34,139,34); 
   } else {
     stroke(255, 120, 120);
   }
  }
  endShape();
  pointCount++;
  
  //rabbit
    translate(x, y);
    noStroke()
    fill(255, 192, 203);
    ellipse(0, -60, 35, 40); // head
    fill(0);
    ellipse(-10, -65, 5, 5); //left eye
    ellipse(10, -65, 5, 5); //right eye
    ellipse(0, -55, 6, 5); //nose
    noFill()
    stroke(0);
    ellipse(0,-47, 5, 2); //mouth
    //arc(-10, -55, 20, 20, 0, HALF_PI);
    //arc(10, -55, 20, 20, HALF_PI, PI)
    noStroke();
    fill(255, 193, 203); //ear color
    ellipse(-15, -90, 15, 40) //left ear
    ellipse(15, -90, 15, 40) // right ear
    stroke(0)
    strokeWeight(1);
    line(-25, -60, 0, -55) // top left whisker
    line(-25, -50, 0, -55) // bottom left whisker
    line(25, -60, 0, -55) // top right whisker
    line(25,-50, 0, -55) // bottom right whisker
     //right ear       
}