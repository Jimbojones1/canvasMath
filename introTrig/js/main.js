var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


ctx.shadowColor = "rgba(0, 0, 0, 0.5)";
ctx.shadowOffsetX = Math.random() * 2;
ctx.shadowOffsetY = 2;
ctx.shadowBlue    = 8;

var circles = [],
    min     = 10,
    max     = 50;

draw()
var counter =0
function draw(){
  var c = createCircle()

  while(!isValid(c)){

    c.x =  2  * Math.random() * width;
    c.y = Math.random() * height
       counter++;
      if(counter > 500){
      return
    }

  }



  while(isValid(c)){
    // increase it up intil the point it hits another circle
    c.r++
  }
   c.r -= 1;
  circles.push(c)
  drawCircle(c)
  requestAnimationFrame(draw)
}


function isValid(c){
  if(c.r > max){
    return false
  }


  for(var i = 0; i < circles.length; i++){
    var c2 = circles[i];

    // find the distance of the circle passed in to each circle;
    dx = c2.x - c.x;
    dy = c2.y - c.y;
    dist = Math.sqrt(dx * dx + dy * dy)

    // if the distance of the radi is less then the sum of the radius(aka diameter)
    // then they are touching
    if(dist < c2.r + c.r + 4){
      return false;
    }
  }
  return true;
}

function createCircle(){
  return {
    x: Math.random() * width,
    y: Math.random() * height,
    r: min
  }
}

function randColor(){
  var r = Math.floor(Math.random() * 255) + 1;
  var g = Math.floor(Math.random() * 255) + 1;
  var b = Math.floor(Math.random() * 255) + 1;
  var a = Math.random();
  return "rgba(" + r + "," + g + "," + b + "," + 0.5 + " )"
}

function drawCircle(c){
  ctx.beginPath();
  console.log(c.r)
  var grd = ctx.createRadialGradient(c.x/4, c.y/4, c.y /3, c.x * 1.5, c.y / 10, c.r * 80);
  grd.addColorStop(0, randColor());
  // grd.addColorStop(1, randColor());
  grd.addColorStop(1, "purple");
  // "rgba(100,255,255, 0.8)"
  ctx.fillStyle = grd;
   ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);

  ctx.fill();
}





