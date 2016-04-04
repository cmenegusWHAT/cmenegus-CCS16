var whatupwalt = ("What is it then between us? What is the count of the scores or hundreds of years between us? Whatever it is, it avails not, distance avails not, and place avails not, I too lived, Brooklyn of ample hills was mine, I too walkd the streets of Manhattan island, and bathed in the waters around it.");      
var words = [];
var lexicon;
var wordPosX = 10;
var wordPosY = 25;
var credit = ("- Walt Whitman");
//var click = ("Walt Whitman MadLibs! Click to switch up the poem");


function setup() {
  createCanvas(800,800);
  lexicon = new RiLexicon();
  
  
  textSize(20);
  fill(200,0, 20);
  
  
  
  words = RiTa.tokenize(whatupwalt);
  for(var i = 0; i < words.length; i++) {
  
  text(words[i], wordPosX, wordPosY);
  textWidth(words[i], 10);
  wordPosX += textWidth(words[i]+" ");
  text(credit, 600, 100);
  
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
  var words = "What is " + 
    lexicon.randomWord("nn") + 
    " then between us? What is the " +
    lexicon.randomWord("nn") +
    " of the " + 
    lexicon.randomWord("nn") +
    " or hundreds of " +
    lexicon.randomWord("nn") +  
    " between us? Whatever " +
    lexicon.randomWord("nn") +
    " is, " +
    lexicon.randomWord("nn") +
    " avails not, " +
    lexicon.randomWord("nn") +
    " avails not, and " +
    lexicon.randomWord("nn") + 
    " avails not, I too lived, " +
    lexicon.randomWord("nn") +
    " of " +
    lexicon.randomWord("jj") + " " +
    lexicon.randomWord("nn") + 
    " was mine, I too walkd the " +
     lexicon.randomWord("nn") + 
     " of " +
    lexicon.randomWord("nn") + " " +
    lexicon.randomWord("nn") + 
    " , and bathed in the " +
    lexicon.randomWord("nn") + 
    " around " +
    lexicon.randomWord("nn") + "."
    
  fill(random(255), 0, random(255));
  background(255);
  textSize(20);
  text(words, 10, 10, 800-20, 800-20);
  credit = "-" + " " + lexicon.randomWord("nn") + " " + lexicon.randomWord("jj")
  text(credit, 580, 120);

 
}  
}