var particles = [];
var now = null;
var slideVal = 0;
var cSlider;
var rSlider;
var bSlider;
var gSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cSlider = createSlider(-100, 100, 100);
  cSlider.position(20, 20);
  vSlider = createSlider(-100, 100, 100);
  vSlider.position(20, 40);
  rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 60);
  bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 80);
  gSlider = createSlider(0, 255, 100);
  gSlider.position(20, 100);

}

function draw() {
  fill(0);
  textSize(17);
  text("Play with the sliders to change the particle's colors and movement", 175, 50);
  slideVal = cSlider.value();
  particles.push(new Particle(new p5.Vector(width / 2, height/2)));

  for (var i = 0; i < particles.length; i++) {
    // if our particle is dead, remove it
    if (particles[i].lifespan <= 0) {
      //splice is a way of removing a specific
      //element from an array
      particles[i].display();
      particles.splice(i, 2); //why 400? 
    } else {
      particles[i].update();
      particles[i].display();
    }
  } 
}

function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  this.vel = new p5.Vector(cSlider.value()+random(-10,10), vSlider.value()+random(-10,10));
  this.lifespan = 50;
}

Particle.prototype = {
  constructor: Particle,
  update: function() {
    this.vel.add(this.acc);
    this.loc.add(this.vel);
    this.lifespan -= 4.0;

  },
  display: function() {
    stroke(random(0), this.lifespan);
    fill(rSlider.value(), gSlider.value(), bSlider.value());
    ellipse(this.loc.x, this.loc.y, 20, 20);
  }
}