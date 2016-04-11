var particles = [];
var now = null;

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255, 25, 25);
  particles.push(new Particle(new p5.Vector(width / 2, 550)));
  particles.push(new Particle(new p5.Vector(width / 10, height /6)));
  particles.push(new Particle(new p5.Vector(width / 10, height /2)));              

  for (var i = 0; i < particles.length; i++) {
    // if our particle is dead, remove it
    if (particles[i].lifespan <= 0) {
      //splice is a way of removing a specific
      //element from an array
      particles.splice(i, 2);
    } else {
      particles[i].update();
      particles[i].display();
    }

function mousePressed() {
  particles.push(new Particle(new p5.Vector(mouseX, mouseY)));
            

} 
  }
}

function Particle(loc) {
  this.loc = loc;
  this.acc = new p5.Vector();
  this.vel = new p5.Vector(random(-100, 100), random(-2, 0));
  this.lifespan = 205;
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
    fill(random(255), random(255), random(255))
    ellipse(this.loc.x, this.loc.y, 20, 20);
  }
}