var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    raf;


// Making a sin wave

    ctx.translate(0, height/2);
    ctx.scale(1, -1);
// angles from 0 2pi
for (var angle = 0; angle < Math.PI * 2; angle += .01){
  console.log(Math.sin(angle))

  var x = angle * 200,
      y = Math.sin(angle) * 200;

      ctx.fillRect(x, y, 5, 5)
}





