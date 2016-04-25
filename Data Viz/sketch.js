
var dataC = [
17,
2,
16,
17,
3
]

var dataB = [
"Coworker",
"Boss",
"Classmate",
"Spam",
"Professor"
]

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(255,250,200);
  for(var i= 0; i < dataC.length; i++){
    translate(0, 45);
    //push();
    fill(random(200), random(200), random(255));
    rect(200, 100, dataC[i] * 50, 40);
    //pop();
  }
 // pop();
  for(var j=0; j < dataB.length; j++) {
    fill(255,random(255),0);
    textSize(25);
    text(dataB[j],220, -60);
    textSize(12);
    fill(random(200), random(200), random(255));
    text("Who's emailing me?!", 20, -70)
    translate(0,50);
  }
 // pop();
  
}
   // pop();