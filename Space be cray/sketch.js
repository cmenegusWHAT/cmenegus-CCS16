var NUMSINES = 10; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

var planet; //planets
var planet0;
var planet1;
var planet3;
var fader = 0;
var planetArray = [];

var bug; // Declare shakey planet object
var angle = 0.0;


var fund = 0.005; // the speed of the central sine
var ratio = 1; // what multiplier for speed is each additional sine?
var alpha = 1; // how opaque is the tracing system

var trace = false; // are we tracing?

var xpos = 0;
var ypos = 20;


function preload(){
//for (var i = 0; i < planetArray.length; i++) {
planet2 = loadImage('Assets/planet2.gif');
append(planetArray, planet2);

planet3 = loadImage('Assets/planet3.gif');
append(planetArray, planet3);

planet0 = loadImage('Assets/planet4.gif');
append(planetArray, planet0);

planet1 = loadImage('Assets/planet1.gif');
append(planetArray, planet1);
}


function setup() {
  bug = new Jitter();
  createCanvas(windowWidth, windowHeight);

  rad = height; // compute radius for central circle
 // background(204); // clear the screen

  for (var i = 0; i<sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw() { //DRAW STARTS HERE!!!
  background(0);
  bug.move(); //bug object
  bug.display();
  
  // stars that rotate
  
  push(); // mini fast rotating bottom right
  translate(width*0.8, height*0.7);
  rotate(frameCount / 2.0);
  fill(random(255), 200, 100);
  star(0, 0, 5, 15, 4); 
  pop();
  
  push(); // mini fast rotating at top
  translate(width*0.6, height*0.15);
  rotate(frameCount / 2.0);
  fill(random(255), 200, random(100));
  star(0, 0, 5, 15, 2); 
  pop();
  
  push();
  translate(width*0.50, height*0.50);
  rotate(frameCount / 15.0);
  fill(random(255), random(200), 100);
  star(0, 0, 80, 3, 100); 
  pop();
  
  push(); // big far upper right
  translate(width*0.75, height*0.25);
  rotate(frameCount / -100.0);
  fill(random(255), 255, random(255));
  star(0, 0, 30, 50, 55); 
  pop();
  
  push(); // big far upper right
  translate(width*0.25, height*0.90);
  rotate(frameCount / -100.0);
  fill(random(20), 0, random(255));
  star(0, 0, 30, 10, 20); 
  pop();
  

  push();
  translate(width*0.85, height*0.80);
  rotate(frameCount / 15.0);
  fill(random(255), random(200), 100);
  star(0, 0, 80, 15, 200); 
  pop();
  

  
  // ellipses moving horizontally across screen
  
  xpos = xpos + 2.5;
 
  // if the circle moves off screen, reset it's position
  if(xpos > width)
  {
    xpos = 0;
    ypos = ypos + random(200);
  }
 
  // draw a circle
  image(planet3, xpos, ypos, 15, 15);
  image(planet2, xpos+random(30), ypos+30, 15, 15);
  
 //planet system starts here
 
 //black hole ellipse
  stroke(1);
  fill(random(250),210,200);
  ellipse(width/1.2, height/10, 30, 30); //center
  fill(random(50),10,0);
  //ellipse(300, 100, height/10, width/10);
  fill(0,10,random(150));
  fill(random(250),200,0);
  ellipse(775, 300, 20, 20);
  
  
  image(planet3, random(200), random(800), 10, 10); //spastic yellow lights on the left
  image(planet0, random(height * .2), random(width *.5), 15, 15);
  
  // circular orbiting planet 1
  var amplitude = height/5;
  angle +=2.0;
  var x,y;
  y=sin(radians(angle)) * amplitude;
  x=cos(radians(angle)) * amplitude;
  fill(100);
  image(planet2, x+250, y+250,10,10);
  
  // random planet
  image(planet2, width-250, height-250,10,10);
   
   
  // angled orbiting planet
  var x,y;
   y=sin(radians(angle)) * amplitude;
    //try adding an offset to our angle here
   x=sin(radians(angle)) * amplitude;
   fill(100);
   image(planet0, x+250,y+250,20,20);
   
   // function Orbit() { // one day I will make the above three an object!!!!
   //this.x = cos(radians(angle)) * amplitude;
   //};
  
    
   image(planet1, 250, 250, 15,15); //center star/planet

  
  // insane ellipse orbiting system begins now!
  
  if (!trace) {
   // background(0,0,0); // clear screen if showing geometry
    //stroke(0, 255, 255); // black pen
    noFill(); // don't 
    ellipse(width/2, height/2, 25, 26.5);
  } 

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen
  noStroke();
  for (var i = 0; i<sines.length; i++) {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    if (trace) {
      //stroke(0, 0, 255*(float(i)/sines.length), alpha); // blue
      //fill(0, 0, 255, alpha/2); // also, um, blue
      stroke(100, 200, 300);
      erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    }
    var radius = rad/(i+7); // radius for circle itself
    rotate(sines[i]); // rotate 
    if (!trace) ellipse(0, 0, radius*3, radius*3); // if we're simulating, draw the sine
    push(); // go up one level
    translate(0, radius); // move to sine edge
    stroke(100, 200, 300);
    if (!trace) image(planetArray[floor(random(4))], 0, 0, 15, 15);
    if (trace) image(planetArray[2],0, 0, erad, erad)
   // if (!trace) ellipse(0, 0, 5, 5); // draw a little circle
   //if (trace) ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
} // DRAW ENDS HERE!!!


// turning star class!
function star(x, y, radius1, radius2, npoints) {
  var angle = TWO_PI / npoints;
  var halfAngle = angle/2.0;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius2;
    var sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a+halfAngle) * radius1;
    sy = y + sin(a+halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// Jitter spastic motion
function Jitter() {
  this.x = random(width);
  this.y = random(height);
  this.diameter = random(10, 30);
  this.speed = 2;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed,this.speed);
    this.z += (-this.speed + 10, this.speed);
    this.a += (-this.speed + 10, this.speed);
  };

this.display = function() {
    noStroke();
    fill(200,0,123);
    image(planet1, this.x+700, this.y+100, this.diameter-10, this.diameter-10);
    image(planet3, this.x+800, this.y+150, this.diameter-10, this.diameter-10);
    image(planet0, this.x+500, this.y+60, this.diameter-10, this.diameter-10);
    image(planet2, this.x+800, this.y+80, this.diameter, this.diameter);
  }
};


function keyReleased() {
  if (key==' ') {
    trace = !trace; 
    //background(255);
    }
  }




