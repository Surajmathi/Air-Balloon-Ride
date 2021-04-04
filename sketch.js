var balloon, background;
var database;
function preload() {
  backgroundImg = loadImage("images/1.png")
  balloonImage = loadAnimation("images/2.png", "images/3.png", "images/4.png");
}

function setup(){
    database = firebase.database();
    createCanvas(700,800);

    balloon = createSprite (100,400, 20, 20)
    balloon.addAnimation("balloon", balloonImage);
    balloon.scale = 0.4;


}

function draw() {
    background(backgroundImg,"Background"); 
  
    fill("black");
    text("Use Arrow Keys to move the Balloon!",10,30);
  
    if(keyDown(LEFT_ARROW)){
      balloon.x = balloon.x - 10;
      }
  else if(keyDown(RIGHT_ARROW)){
      balloon.x = balloon.x + 10;
  }
  else if(keyDown(UP_ARROW)){
      balloon.y = balloon.y - 10;
      balloon.scale = 0.35;
  }
  else if(keyDown(DOWN_ARROW)){
      balloon.y = balloon.y + 10;
      balloon.scale = 0.25;
    }
  
    drawSprites();
  }
  
  function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
  }
  
  function readValue(data) {
    position = data.val();
  
    ball.x = position.x;
    ball.y = position.y;
  
  }
  
  function showError() {
    console.log("Error in connecting to Database");
  }
  
  function writePosition(x,y) {
    database.ref('balloon/position').set({
        'x' : position.x + x,
        'y' : position.y + y,
    })    
  
  }