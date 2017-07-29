function Snake(){
  this.x      = 0;
  this.y      = 0;
  this.directionx = 1;
  this.directiony = 0;

  this.eat = function(posVector){
    const d = dist(this.x, this.y, posVector.x, posVector.y)
    if (d < 1) return true;
  }

  this.update = function (){
    this.x = this.x + this.directionx * scl;
    this.y = this.y + this.directiony * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);

  };

  this.show = function(){
    fill(255)
    rect(this.x, this.y, scl, scl);
  };

  this.dir = function(x, y){
   this.directionx = x;
   this.directiony = y
  }

}
