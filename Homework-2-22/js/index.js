function setup() {
  createCanvas(400, 400);
}

function draw() {
  var x = 0; //setting variable//
  for (var x = 0; x < 90; x = x + 30) { //looping through to display arrows. x is set to < 90 because I want 3 arrows, each adding an x value of 30 to the last one. Setting it to less than < 90 stops the arrows from looping after 3. 30 moves the arrows 30 across the screen each loop.//
    //fill(random(255), 0, random(255)) //fills arrows with colors. random makes the colors crazy! //

    fill(random(255), 0, random(255));
    beginShape();
    vertex(180 - x, 82); //subtracting x each time changes the x/starting point of each vertex//
    vertex(207 - x, 36);
    vertex(214 - x, 63);
    vertex(307 - x, 11);
    vertex(312 - x, 30);
    vertex(219 - x, 82);
    vertex(223 - x, 109);
    endShape(CLOSE); //ensures shape fully closes //
 }
}