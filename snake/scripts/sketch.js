let snake;
// scl for scale, scale is built in to p5;
const scl = 20;
let food;

function setup() {
  canvas = createCanvas(floor(window.innerWidth), floor(window.innerHeight));
  snake = new Snake();
  // old throw back game
  frameRate(10);
  food = pickLocation();

}

function pickLocation(){
  const cols = floor(width/scl);
  const rows = floor(height/scl);
  console.log(floor(random(cols)), cols)
  food = createVector(floor(random(cols)), floor(random(rows)));

  food.mult(scl);
  return food;


}

function draw(){
  background(51);
  snake.update();
  snake.show();
  if(snake.eat(food)){
    food = pickLocation()
  }
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl)
}


function keyPressed(){
  // keyCode built in variable in p5
  if(keyCode === UP_ARROW){
    snake.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    snake.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW){
    snake.dir(1, 0);
  } else if(keyCode === LEFT_ARROW){
    snake.dir(-1,0);
  }
}



