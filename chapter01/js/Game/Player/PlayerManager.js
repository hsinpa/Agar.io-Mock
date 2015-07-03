function Player( game) {
    this.position = {x : 100, y : 100, r : 50 };
    this.graphics = game.add.graphics(this.position.x, this.position.y);
}

Player.prototype.set = function() {
    this.graphics.lineStyle(0);
    this.graphics.beginFill(0xFFFF0B, 0.5);
    this.graphics.drawCircle(0, 0, this.position.r);
    this.graphics.endFill();

    this.graphics.x = this.position.x;
    this.graphics.y = this.position.y;
}


Player.prototype.move = function() {
    this.graphics.x = this.position.x;
    this.graphics.y = this.position.y;
}


Player.prototype.demoObject = function(x, y) {
  this.graphics.lineStyle(0);
  this.graphics.beginFill(0xFFFF0B, 0.5);
  this.graphics.drawCircle(x, y, this.position.r);
  this.graphics.endFill();
}
