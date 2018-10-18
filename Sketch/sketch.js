//Refers to clicks - true/false
var moving = true
//Name
var name = 'Jack'
//Starting position of the square
var positionX = 200
var positionY = 100
//Direction of movement
var directionX = 1
var directionY = 1
//Numbers
var score = 0
//Corrects direction
var correct = 10
//Paddle position
var paddleFuck = 80
var paddleCunt = 380

//Creates the canvas
function setup() {
  createCanvas(400, 200)
}
//Fills the canvas with a grey background
function draw () {
//Position of the square in the console
//Colour of the background
  background(100)
//Inserts score
text('Score: ' + score, 183, 20) 

//Square moves when moving = true

  if (positionX == 397 || positionX == 3){
    directionX = -directionX;
  }

  if (positionY == 197 || positionY == 3){
    directionY = -directionY;
  }

  if (moving) {
    positionX = (positionX + directionX);
    positionY = (positionY + directionY)
  }
  //Position of the square
  ellipse (positionX, positionY, 10, 10)
//Moving true/false in console
  // console.log( ' The square is moving ' + moving)
//Adds 1 to score when ball hits left wall
  if (positionX == 5) {
    score = score + 1
  }
  console.log( 'The position is' + positionX + positionY)

  rect (paddleCunt, paddleFuck, 10, 40)

  if (keyIsPressed) {
    if (key == 'w') {
     paddleFuck = paddleFuck - 1
    }
  }

  if (keyIsPressed) {
    if (key == 's') {
     paddleFuck = paddleFuck + 1
    }

    if (positionX == paddleCunt && positionY == paddleFuck) {
      directionX = -DirectionX
    }

  }

//  if (positionX && positionY == paddle_position)
  //  {
// directionX = -directionX
  // }


}
//Changes moving to true/false on mouse click
function mousePressed() {
  moving = !moving
}

