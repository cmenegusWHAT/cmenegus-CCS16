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
  
  
  xpos = xpos + 2;
 
  // if the circle moves off screen, reset it's position
  if(xpos > width)
  {
    xpos = 0;
    ypos = ypos + random(200);
  }
 
  // draw a circle
  image(planet3, xpos, ypos, 15, 15);
  image(planet1, xpos+random(30), ypos+30, 15, 15);
  
  //start planet system
 
 //center 
  stroke(1);
  fill(random(50),10,0);
  ellipse(360, 200, 30, 30)
  
  // circular orbiting planet
  var amplitude = height/5;
  angle +=2.0;
  var x,y;
  y=sin(radians(angle)) * amplitude;
  x=cos(radians(angle)) * amplitude;
  fill(100);
  image(planet2, x+150, y+150,10,10);
   
   
   // angled orbiting planet
  var x,y;
   y=sin(radians(angle)) * amplitude;
    //try adding an offset to our angle here
   x=sin(radians(angle)) * amplitude;
   fill(100);
   image(planet0, x+150,y+150,20,20);
  
    
   image(planet1, 150, 150, 15,15); //center star/planet
   
  // I think this was extra but I'm scared to delete
  //this.display = function() {
   // noStroke();
  //  fill(200,0,123);
  //  ellipse(this.x, this.y, this.diameter, this.diameter);
  //  ellipse(this.z, this.a, this.diameter+200, this.diameter+200);
 // }
  
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
    image(planet1, this.x+200, this.y+100, this.diameter-10, this.diameter-10);
    image(planet3, this.x+300, this.y+150, this.diameter-10, this.diameter-10);
    image(planet0, this.x+500, this.y+190, this.diameter-10, this.diameter-10);
  }
};


function keyReleased() {
  if (key==' ') {
    trace = !trace; 
    //background(255);
    }
  }




