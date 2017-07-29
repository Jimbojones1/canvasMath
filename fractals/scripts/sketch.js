var canvas;
var speed;
var stars = [];

function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  for (let i = 0; i < 800; i++){
    stars[i] = new Star();
  }
}


function draw(){
  speed = map(mouseX, 0, width, 0, 50);
  background(0);
  translate(width/2, height/2);
  for (let i = 0; i < stars.length; i++){
    stars[i].update();
    stars[i].show();
  }
  // rect(50, 300, 500, -50);
}


