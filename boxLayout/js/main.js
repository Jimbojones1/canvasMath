var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    width = canvas.width = window.innerWidth,
    height = canvas.height = window.innerHeight,
    raf;


ctx.fillStyle = "#cccccc";
ctx.fillRect(0, 0, 600, 600);
ctx.fillStyle = 'black';

var items = [];
for (var i = 0; i < 55; i++){
  items.push({
    w: Math.random() * 80,
    h: Math.random() * 80
  })
}

hbox(items, 10, 'center', true)


function hbox(items, spacing, alignment, wrap){
  var x = spacing,
      y = spacing,
      maxHeight = 100,
      yPos = 0;

  for (var i = 0; i < items.length; i++){
    maxHeight = Math.max(maxHeight, items[i].h)
  }


  for(var i = 0;  i < items.length; i++){
    var item = items[i];

    if(true && x + spacing +item.w > canvas.width){
      x = spacing;
      y += spacing + maxHeight;
    }

    if(alignment === 'bottom'){
      yPos = maxHeight - item.h
    }
    else if(alignment === 'center'){
      yPos = (maxHeight - item.h) / 2
    }
    ctx.fillRect(x, y + yPos, item.w, item.h)
    x += item.w + spacing
  }
}




