window.onload = function() {
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight;


context.fillStyle = "#cccccc"
context.fillRect(0, 0, width, height);
context.fillStyle = "#000000"

var rows = 10,
    cols = 10;

var cellWidth  = width / cols,
    cellHeight = height / rows;

for (var i = 0; i < rows; i++){
  for(var j = 0; j < cols; j++){
    context.save();
    context.translate(j * cellWidth, i * cellHeight)

    context.fillRect(5, 5, cellWidth - 10, cellHeight - 10)

    context.restore()
  }
}

};
