function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  if(mouseX < width / 3) {
    rect(mouseX,mouseX,mouseY,mouseY);
  }
  else {
    rect(10,10,10,10);
  }
}