function Player( canvas, context) {
    this.position = {x : 100, y : 100, r : 7 };
    this.canvas = canvas;
    this.context = context;
    this.staticPosX = context.canvas.width/2;
    this.staticPosY = context.canvas.height/2;

}

Player.prototype.set = function() {
  this.context.beginPath();
  this.context.arc(this.staticPosX, this.staticPosY, this.position.r, 0, 2 * Math.PI, false);
  this.context.fillStyle = 'green';
  this.context.fill();
  this.context.lineWidth = 1;
  this.context.strokeStyle = '#003300';
  this.context.stroke();
}

Player.prototype.demoObject = function(x, y) {
  this.context.beginPath();
  this.context.arc(x, y, 10, 0, 2 * Math.PI, false);
  this.context.fillStyle = 'blue';
  this.context.fill();
  this.context.lineWidth = 1;
  this.context.strokeStyle = '#003300';
  this.context.stroke();
}
