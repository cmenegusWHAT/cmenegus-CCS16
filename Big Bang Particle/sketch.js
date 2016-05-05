var size = 20;
var bangLength = 2000000000;
var lifeConstant = 5000;
var startVelMin = -10;
var startVelMax = 7;
var drag = -50;
var planetArray = [];
var planet;
var planet0;
var planet1;
var planet3;
var fader = 0;
var posX;
var posY;

function preload(){
//for (var i = 0; i < planetArray.length; i++) {
planet = loadImage('Assets/planet2.gif');
append(planetArray, planet);

planet3 = loadImage('Assets/planet3.gif');
append(planetArray, planet3);

planet0 = loadImage('Assets/planet4.gif');
append(planetArray, planet0);

planet1 = loadImage('Assets/planet1.gif');
append(planetArray, planet1);
}

//planetArray.add(planet);
function setup() {
  createCanvas(windowWidth, windowHeight);
  systems = [];
   background(51);
}

function draw() {
  background(0)
  fader++; //This deals with drawing my ellipses
  noFill(); //Adjust here for changing the color of the ellipse
  strokeWeight(4);
  stroke(random(240), random(200), random(220));
  ellipse(posX, posY, 1.7*fader*random(10), 1.7*fader*random(10));
  
  if(fader>300||fader==1){ //this stops drawing ellipses when too large or just having finished
    fader=0;
  }
  
  for (i = 0; i < systems.length; i++) { //add particles to array
    systems[i].run();
    systems[i].addParticle();
  }
 
  if (systems.length===0) {
    fill('white');
    stroke('black');
    textAlign(CENTER);
    textSize(42);
    text("Click mouse to create Big Bangs", width/2, height/2);
  }
}

function mousePressed() {
  this.p = new ParticleSystem(createVector(mouseX, mouseY));
  systems.push(p);
  fader = 1;
  posX= mouseX;
  posY= mouseY;
  }

// A simple Particle class
var Particle = function(position) {
  this.acceleration = createVector(0, .1);
  this.velocity = createVector(random(startVelMin,startVelMax), random(startVelMin,startVelMax));
  this.position = position.copy();
  this.lifespan = lifeConstant;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(drag*this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 150;
};

// Method to display
Particle.prototype.display = function () {
  image(planetArray[floor(random(4))], this.position.x, this.position.y, 15, 15);
};

// Is the particle still useful?
Particle.prototype.isDead = function () {
  if (this.lifespan < 0) {
    return true;
  } else {
    return false;
  }
};

var ParticleSystem = function (position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function () {
  // Add either a Particle or CrazyParticle to the system
 if (int(random(0, 2)) == 0) {
   p = new Particle(this.origin);
  }
  else {
  p = new
  CrazyParticle(this.origin);
  }
  this.particles.push(p);
  };

ParticleSystem.prototype.run = function () {
  for (var i = this.particles.length - 1; i >= 0; i--) {
    var p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 1);
    }
  }
};

// A subclass of Particle

function CrazyParticle(origin) {
  // Call the parent constructor, making sure (using Function#call)
  // that "this" is set correctly during the call
Particle.call(this, origin);

  // Initialize our added properties
this.theta = 0.0;
};

// Create a Crazy.prototype object that inherits from Particle.prototype.
// Note: A common error here is to use "new Particle()" to create the
// Crazy.prototype. That's incorrect for several reasons, not least 
// that we don't have anything to give Particle for the "origin" 
// argument. The correct place to call Particle is above, where we call 
// it from Crazy.
CrazyParticle.prototype = Object.create(Particle.prototype); // See note below

// Set the "constructor" property to refer to CrazyParticle
CrazyParticle.prototype.constructor = CrazyParticle;

// Notice we don't have the method run() here; it is inherited from Particle

// This update() method overrides the parent class update() method
CrazyParticle.prototype.update=function() {
  Particle.prototype.update.call(this);
  // Increment rotation based on horizontal velocity
 this.theta += (this.velocity.x * this.velocity.mag()) / 10.0;
 }

// This display() method overrides the parent class display() method
CrazyParticle.prototype.display=function() {
  // Render the ellipse just like in a regular particle
//  Particle.prototype.display.call(this);
 
}