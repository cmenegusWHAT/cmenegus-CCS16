var circle1;
var circle2;
var circle3;
var circle4;
var circle5;

function setup() {
createCanvas(800,500);
circle1=400;
circle2=300;
circle3=250;
circle4=200;
circle5=0;

}
function draw() {
  background(circle5,circle5,circle5);
  var c= color(0,0,0)
  fill(c)
  ellipse(circle1,circle3,circle1,circle1);
  stroke(circle3,circle3,circle3);
  line (450,58,450,443);
  line (350,58,350,443);
  line(circle1,50,circle1,450);
  quad(375, circle4, 500, circle4, 425, circle2, circle2, circle2);
  line(340,250,460,circle3);
  line(346,240,470,240);
  line(332,260,452,260);
    
  

 
  
    
  
}