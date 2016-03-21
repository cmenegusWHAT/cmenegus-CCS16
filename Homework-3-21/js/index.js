
var radius = 110.0;
var angle = 0.0;
var x = 0,
  y = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

  background(255);
  translate(width / 2, height / 2);
  stroke(205, 205, 55);
  fill(255, 0, 255);
  ellipse(0, 0, 10, 10);
  noFill();
  ellipse(0, 0, 250, 250);
  stroke(25);

  if (x < TWO_PI / 2) { //conditional to change howl to wearwolf //
    fill(10, 105, 55);
    text("WEAR WOLF", x + 10, y + 15);

    var angleOffset = -1 * PI / 2; //create variable//
    for (var i = 1; i <= 12; i++) { //generate 12 outputs//
      angle = 2 * PI * i / 12 + angleOffset; //what is this? another variable? Set angle //
      text("HOWL", radius * cos(angle), radius * sin(angle)) //set text at coordinates //

    }
  } else {
    noFill();
    text("HUMAN!", x + 10, y + 5);
    var angleOffset = -1 * PI / 2; //create variable//
    for (var i = 1; i <= 12; i++) { //generate 12 numbers//
      angle = 2 * PI * i / 12 + angleOffset; //angle? //
      text(i, radius * cos(angle), radius * sin(angle)); //output numbers 1-12 at coordinates //
    }

  }

  angle = (second() / 59.0) * TWO_PI;

  // memorize this formula, it's helpful
  x = cos(angle) * radius;
  y = sin(angle) * radius;

  stroke(255, 0, 255);

  //draw a line from the center of our screen and as long as our radius

  line(0, 0, x, y);
  ellipse(x, y, 10, 10);
}