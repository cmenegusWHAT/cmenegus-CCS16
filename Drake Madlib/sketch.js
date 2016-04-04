var Drake = ("You used to call me on my cellphone. Late night when you need my love...cause I know when that hotline bling...it can only mean one thing.");      
var words = [];
var lexicon;
var wordPosX = 10;
var wordPosY = 25;



function setup() {
  createCanvas(800,800);
  lexicon = new RiLexicon();
  
  
  textSize(20);
  fill(200,0, 20);
  
  
  
  words = RiTa.tokenize(Drake);
  for(var i = 0; i < words.length; i++) {
  
  text(words[i], wordPosX, wordPosY);
  textWidth(words[i], 10);
  wordPosX += textWidth(words[i]+" ");
  
  if(wordPosX > 700){
  wordPosX = 10;
  wordPosY += 20;
    }
  }
}

function mousePressed() {
  madLibs();
  
  textSize(12);
  textAlign(LEFT, TOP);
 
function madLibs() {
  var words = "You used to call me on my " + 
    lexicon.randomWord("nn") + 
    " late night when you need my " + 
    lexicon.randomWord("nn") + "..." +
    " Cause I know when that " + 
    lexicon.randomWord("nn") +
    " it can only mean one " +
    lexicon.randomWord("nn") +  "."
    
    
  fill(random(255), 0, random(255));
  background(255);
  textSize(20);
  text(words, 10, 10, 800-20, 800-20);
}  
}
