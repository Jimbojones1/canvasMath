function init() {
  map.onload = function(){
    ctx.drawImage(map, 0, 0);
    pacman.drawPacman(pacman.x, pacman.y, pacman.r);
  };
}

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var map = new Image();
map.src = 'image/level.png';
map.crossOrigin = "Anonymous";


var pacman = {
  dx: 20,
  dy: 20,
  x: 300,
  y: 300,
  width: 600,
  height: 600,
  r: 15,
  drawPacman: function(){
    console.log('drawPacman function is working')
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI*2, true);
    ctx.fillStyle = "yellow";
    ctx.fill();
  },



  doKeyDown: function(evt){
    console.log('keyDown works')
    switch (evt.keyCode) {
      case 38:
      console.log("up key")
      if (pacman.y - pacman.dy > 0){
      pacman.y -= pacman.dy;
      }
      break;
      case 40:
      console.log("down key")
      if (pacman.y + pacman.dy < pacman.height){
      pacman.y += pacman.dy;
      }
      break;
      case 37:
      console.log("left key")
      if (pacman.x - pacman.dx > 0){
      pacman.x -= pacman.dx;
      }
      break;
      case 39:
      console.log("right key")
      if (pacman.x + pacman.dx < pacman.width){
      pacman.x += pacman.dx;
      }
      break;
    }
  }
}

function animate(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(map, 0, 0);
  pacman.drawPacman()
  window.requestAnimationFrame(animate)
}

window.onload = function(){
  animate()
  init();

}



window.addEventListener('keydown', pacman.doKeyDown, true);







































// window.onload = function() {


// var canvas = document.getElementById("canvas"),
// context = canvas.getContext("2d"),
// width = canvas.width = window.innerWidth,
// height = canvas.height = window.innerHeight;


// var img = new Image();   // Create new img element

// img.addEventListener('load', function() {
//   // execute drawImage statements here


// }, false);

// img.src = 'image/level.png'




// //     for (var i = 1; i <= nbr_circles; ++i) {
// //   dc.beginPath();
// //   var angle = i*2*Math.PI/nbr_circles;
// //   var x = cx + Math.cos(angle) * lg_rad;
// //   var y = cy + Math.sin(angle) * lg_rad;
// //   dc.arc(x, y, sm_rad, 0, 360, false);
// //   dc.fill();
// // }


//   // context.fillStyle='#000';
//   // var nbr_circles = 18

//   // var lg_rad = (width/2) * .25;
//   // var lg_circ = 2*Math.PI*lg_rad;
//   // var sm_rad = (lg_circ / nbr_circles) / 2;
//   // var cx = width/2;
//   // var cy = height/2;

//   // for (var i = 1; i <= nbr_circles; ++i) {
//   //   context.beginPath();
//   //   var angle = i*2*Math.PI/nbr_circles;
//   //   var x = cx + Math.cos(angle) * lg_rad;
//   //   var y = cy + Math.sin(angle) * lg_rad;
//   //   context.arc(x, y, sm_rad, 0, 2*Math.PI, false);
//   //   context.fill();
//   // }
// context.beginPath()
// context.moveTo(100, 100)
// context.lineTo(200, 100)
// context.lineTo(200, 20)
// context.closePath();
// context.stroke();

// context.beginPath();
// context.moveTo(250, 100);
// context.lineTo(350, 100);

// context.beginPath();
// context.moveTo(100, 400);
// var x = 100 + Math.cos(10) * Math.PI;
// var y = 400 + Math.sin(1) * Math.PI;
// context.arc(x, y, 50, 0, 360, false)
// context.stroke();
// // context.lineTo(250)


// // walker
// function Walker() {
//     this.x = width/2;
//     this.y = height/2;
// };


// Walker.prototype.display = function() {
//     stroke(0, 0, 0);
//     point(this.x, this.y);
// };







// // x = cx + cos(θ) R
// // y = cy + sin(θ) R
// var num_of_circles = 60
// var lg_rad = (width/2) * .25;               // large radius
// var lg_circ = 2*Math.PI*lg_rad;             // large circumference
// var sm_rad = (lg_circ / num_of_circles) / 2;   // small radius
// var cx = width / 2;
// var cy = height / 2;

//     for (var i = 1; i <= num_of_circles; ++i){
//       context.beginPath();
//       var angle = i * 2 * Math.PI/num_of_circles;
//       var x = cx + Math.cos(angle) * lg_rad;
//       var y = cy + Math.sin(angle) * lg_rad;
//       context.arc(x, y, sm_rad, 0, 360, false);
//       context.fill()

//     }

// };
