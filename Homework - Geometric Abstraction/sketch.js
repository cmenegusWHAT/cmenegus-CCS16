function setup() {
createCanvas(windowWidth, windowHeight);
}

function draw() {
  //yellow object//
    fill(255,238, 0);
    stroke(255,238,0);
    quad(150, 300, 220, 305, 200, 390, 153, 390);
  //blue line//
    stroke(25,25,112);
    fill(25,25,112);
    quad(50,350,250,380,250,390,50,360);
  //blue object//
    fill(25,25,112);
    stroke(25,25,112);
    quad(150, 0, 220, 20, 150, 130, 80,  100 );
  //black square//
    stroke(0,0,0);
    fill(0,0,0);
    quad(75,340,125,340,125,390,75,390);
  //small red rectangle//
    stroke(255,0,0);
    fill(255,0,0);
    quad(150,440,175,435,177,445,152,450);
  //black rectangle//
    stroke(0,0,0);
    fill(0,0,0);
    quad(115,430,145,410,155,425,125,445);
  //red line//
    stroke(255,0,0);
    fill(255,0,0);
    quad(166,455,220,460,220,465,166,460);
  //green circle//
    stroke(0,128,0);
    fill(0,128,0);
  ellipse(180,475,15,15);
}
